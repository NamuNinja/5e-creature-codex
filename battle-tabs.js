/**
 * Battle Tabs Feature
 * Allows saving creatures to multiple quick-access tabs for upcoming battles
 * Features:
 * - Create unlimited battle tabs
 * - Delete tabs (minimum 1 tab required)
 * - Rename tabs
 * - Add/remove creatures to/from tabs
 * - Persistent storage across sessions
 */

class BattleTabsManager {
    constructor() {
        this.battleTabs = {
            tab1: { name: 'Battle 1', creatures: {} }, // Changed from [] to {} for instance tracking
            tab2: { name: 'Battle 2', creatures: {} },
            tab3: { name: 'Battle 3', creatures: {} }
        };
        this.activeTab = 'tab1';
        this.nextTabId = 4; // Counter for new tab IDs
        this.nextInstanceId = 1; // Counter for creature instances
        this.loadBattleTabs();
    }

    loadBattleTabs() {
        const storage = this.getStorage();
        if (!storage) return;

        const stored = storage.getItem('battleTabs');
        if (stored) {
            try {
                const data = JSON.parse(stored);
                this.battleTabs = data.tabs || data; // Support both old and new format
                this.nextTabId = data.nextTabId || this.calculateNextTabId();
                this.nextInstanceId = data.nextInstanceId || 1;

                // Migrate old format (array) to new format (object with instances)
                Object.keys(this.battleTabs).forEach(tabId => {
                    if (Array.isArray(this.battleTabs[tabId].creatures)) {
                        const newCreatures = {};
                        const allCreatures = typeof getAllCreatures === 'function' ? getAllCreatures() : {};

                        this.battleTabs[tabId].creatures.forEach(creatureName => {
                            const instanceId = `instance_${this.nextInstanceId++}`;
                            const creature = allCreatures[creatureName] || {};

                            // Extract HP from creature - try multiple possible property names
                            let creatureHP = creature.hp || creature.hit_points || creature.HP || creature.hitPoints || null;

                            // Parse HP if it's a string like "7 (2d6)" - extract the first number
                            if (typeof creatureHP === 'string') {
                                const hpMatch = creatureHP.match(/(\d+)/);
                                creatureHP = hpMatch ? parseInt(hpMatch[1]) : null;
                            }

                            newCreatures[instanceId] = {
                                name: creatureName,
                                displayName: creatureName,
                                currentHP: creatureHP,
                                maxHP: creatureHP,
                                tempHP: 0,
                                initiative: 0
                            };
                        });
                        this.battleTabs[tabId].creatures = newCreatures;
                    }

                    // Also fill in HP for instances that have null HP (from old migrations)
                    Object.keys(this.battleTabs[tabId].creatures).forEach(instanceId => {
                        const instance = this.battleTabs[tabId].creatures[instanceId];
                        if (instance.currentHP === null || instance.maxHP === null) {
                            const allCreatures = typeof getAllCreatures === 'function' ? getAllCreatures() : {};
                            const creature = allCreatures[instance.name] || {};

                            // Extract HP from creature
                            let creatureHP = creature.hp || creature.hit_points || creature.HP || creature.hitPoints || null;

                            // Parse HP if it's a string
                            if (typeof creatureHP === 'string') {
                                const hpMatch = creatureHP.match(/(\d+)/);
                                creatureHP = hpMatch ? parseInt(hpMatch[1]) : null;
                            }

                            // Fill in missing HP values
                            if (instance.currentHP === null) instance.currentHP = creatureHP;
                            if (instance.maxHP === null) instance.maxHP = creatureHP;
                        }
                    });
                });

                // Ensure we have at least one tab
                if (Object.keys(this.battleTabs).length === 0) {
                    this.battleTabs.tab1 = { name: 'Battle 1', creatures: {} };
                }

                // Validate activeTab still exists
                if (!this.battleTabs[this.activeTab]) {
                    this.activeTab = Object.keys(this.battleTabs)[0];
                }
            } catch (e) {
                console.error('Error loading battle tabs:', e);
            }
        }
    }

    calculateNextTabId() {
        // Find the highest tab number
        let maxId = 0;
        Object.keys(this.battleTabs).forEach(key => {
            const match = key.match(/tab(\d+)/);
            if (match) {
                maxId = Math.max(maxId, parseInt(match[1]));
            }
        });
        return maxId + 1;
    }

    saveBattleTabs() {
        const storage = this.getStorage();
        if (!storage) return;

        // Save tabs, nextTabId, and nextInstanceId counters
        const data = {
            tabs: this.battleTabs,
            nextTabId: this.nextTabId,
            nextInstanceId: this.nextInstanceId
        };
        storage.setItem('battleTabs', JSON.stringify(data));
    }

    getStorage() {
        try {
            return window.localStorage || window.sessionStorage || null;
        } catch (e) {
            return null;
        }
    }

    addCreatureToTab(tabId, creatureName) {
        if (!this.battleTabs[tabId]) return false;

        // Get creature data to initialize HP
        const allCreatures = typeof getAllCreatures === 'function' ? getAllCreatures() : {};
        const creature = allCreatures[creatureName] || {};

        // Extract HP from creature - try multiple possible property names
        let creatureHP = creature.hp || creature.hit_points || creature.HP || creature.hitPoints || null;

        // Parse HP if it's a string like "7 (2d6)" - extract the first number
        if (typeof creatureHP === 'string') {
            const hpMatch = creatureHP.match(/(\d+)/);
            creatureHP = hpMatch ? parseInt(hpMatch[1]) : null;
        }

        // Create unique instance ID
        const instanceId = `instance_${this.nextInstanceId++}`;

        // Count existing instances of this creature to create display name
        const instanceCount = this.getInstanceCount(tabId, creatureName);
        const displayName = instanceCount > 0 ? `${creatureName} (${instanceCount + 1})` : creatureName;

        // Add instance with HP tracking data - initialize currentHP to maxHP
        this.battleTabs[tabId].creatures[instanceId] = {
            name: creatureName,
            displayName: displayName,
            currentHP: creatureHP,
            maxHP: creatureHP,
            tempHP: 0,
            initiative: 0
        };

        this.saveBattleTabs();
        return true;
    }

    getInstanceCount(tabId, creatureName) {
        if (!this.battleTabs[tabId]) return 0;
        return Object.values(this.battleTabs[tabId].creatures)
            .filter(instance => instance.name === creatureName)
            .length;
    }

    removeCreatureFromTab(tabId, instanceId) {
        if (!this.battleTabs[tabId]) return false;
        if (!this.battleTabs[tabId].creatures[instanceId]) return false;

        delete this.battleTabs[tabId].creatures[instanceId];
        this.saveBattleTabs();
        return true;
    }

    renameTab(tabId, newName) {
        if (!this.battleTabs[tabId]) return false;
        this.battleTabs[tabId].name = newName;
        this.saveBattleTabs();
        return true;
    }

    clearTab(tabId) {
        if (!this.battleTabs[tabId]) return false;

        const creatureCount = Object.keys(this.battleTabs[tabId].creatures).length;
        if (creatureCount === 0) {
            if (typeof showNotification === 'function') {
                showNotification('Tab is already empty', 'info');
            }
            return false;
        }

        // Show confirmation modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 p-4';
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
                <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Clear All Creatures?
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Are you sure you want to remove all <strong>${creatureCount} creature(s)</strong> from "${this.battleTabs[tabId].name}"?
                </p>
                <div class="flex gap-2">
                    <button
                        onclick="this.closest('.fixed').remove()"
                        class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition"
                    >
                        Cancel
                    </button>
                    <button
                        onclick="battleTabsManager.confirmClearTab('${tabId}'); this.closest('.fixed').remove();"
                        class="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                    >
                        Clear All
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        return true;
    }

    confirmClearTab(tabId) {
        if (!this.battleTabs[tabId]) return false;
        this.battleTabs[tabId].creatures = {};
        this.saveBattleTabs();
        this.renderBattleTabsUI();
        if (typeof showNotification === 'function') {
            showNotification('All creatures cleared from tab', 'success');
        }
        return true;
    }

    isInTab(tabId, creatureName) {
        if (!this.battleTabs[tabId]) return false;
        return Object.values(this.battleTabs[tabId].creatures)
            .some(instance => instance.name === creatureName);
    }

    getTabCreatures(tabId) {
        if (!this.battleTabs[tabId]) return [];
        return Object.values(this.battleTabs[tabId].creatures);
    }

    getAllTabs() {
        return this.battleTabs;
    }

    createNewTab(name = null) {
        const tabId = `tab${this.nextTabId}`;
        const tabName = name || `Battle ${this.nextTabId}`;

        this.battleTabs[tabId] = {
            name: tabName,
            creatures: {}
        };

        this.nextTabId++;
        this.saveBattleTabs();
        return tabId;
    }

    deleteTab(tabId) {
        // Prevent deleting the last tab
        if (Object.keys(this.battleTabs).length <= 1) {
            console.warn('Cannot delete the last tab');
            return false;
        }

        if (!this.battleTabs[tabId]) {
            return false;
        }

        // If deleting active tab, switch to another tab first
        if (this.activeTab === tabId) {
            const tabIds = Object.keys(this.battleTabs);
            const currentIndex = tabIds.indexOf(tabId);
            // Switch to previous tab or next tab
            this.activeTab = tabIds[currentIndex > 0 ? currentIndex - 1 : 1];
        }

        delete this.battleTabs[tabId];
        this.saveBattleTabs();
        return true;
    }

    getTabCount() {
        return Object.keys(this.battleTabs).length;
    }

    renderBattleTabsUI() {
        const container = document.getElementById('battle-tabs-container');
        if (!container) return;

        const html = `
            <div class="battle-tabs-panel bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                <h3 class="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">
                    ⚔️ Battle Preparation Tabs
                </h3>

                <!-- Tab Navigation -->
                <div class="flex gap-2 mb-4 overflow-x-auto pb-2">
                    ${Object.keys(this.battleTabs).map(tabId => `
                        <div class="relative group">
                            <button
                                onclick="battleTabsManager.switchTab('${tabId}')"
                                class="battle-tab-btn px-4 py-2 rounded-lg font-medium transition ${
                                    this.activeTab === tabId
                                        ? 'bg-purple-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }"
                                data-tab="${tabId}"
                            >
                                ${this.battleTabs[tabId].name}
                                <span class="text-xs opacity-75 ml-1">(${Object.keys(this.battleTabs[tabId].creatures).length})</span>
                            </button>
                            ${Object.keys(this.battleTabs).length > 1 ? `
                                <button
                                    onclick="battleTabsManager.confirmDeleteTab('${tabId}'); event.stopPropagation();"
                                    class="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
                                    title="Delete this tab"
                                >×</button>
                            ` : ''}
                        </div>
                    `).join('')}
                    <button
                        onclick="battleTabsManager.promptNewTab()"
                        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition flex items-center gap-1 whitespace-nowrap"
                        title="Create new battle tab"
                    >
                        <span class="text-lg">+</span>
                        <span class="hidden sm:inline">New Tab</span>
                    </button>
                </div>

                <!-- Active Tab Content -->
                <div class="battle-tab-content">
                    <div class="flex justify-between items-center mb-3">
                        <div class="flex items-center gap-2">
                            <input
                                type="text"
                                id="tab-name-${this.activeTab}"
                                value="${this.battleTabs[this.activeTab].name}"
                                onchange="battleTabsManager.renameTab('${this.activeTab}', this.value)"
                                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm"
                                maxlength="20"
                            />
                            <button
                                onclick="battleTabsManager.clearTab('${this.activeTab}')"
                                class="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition"
                                title="Clear this tab"
                            >
                                Clear All
                            </button>
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">
                            ${Object.keys(this.battleTabs[this.activeTab].creatures).length} creatures
                        </div>
                    </div>

                    <!-- Creatures in Tab -->
                    <div id="tab-creatures-${this.activeTab}" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-h-[100px]">
                        ${this.renderTabCreatures(this.activeTab)}
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    renderTabCreatures(tabId) {
        const creatures = this.battleTabs[tabId].creatures;
        const instanceEntries = Object.entries(creatures);

        if (instanceEntries.length === 0) {
            return `
                <div class="col-span-full text-center text-gray-500 dark:text-gray-400 py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                    <p class="text-sm">No creatures added yet</p>
                    <p class="text-xs mt-1">Click "Add to Battle Tab" on any creature</p>
                </div>
            `;
        }

        return instanceEntries.map(([instanceId, instance]) => {
            const allCreatures = typeof getAllCreatures === 'function' ? getAllCreatures() : {};
            const creature = allCreatures[instance.name];

            if (!creature) {
                return `
                    <div class="p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-xs">
                        <div class="flex justify-between items-start">
                            <span class="text-red-600 dark:text-red-400">${instance.displayName} (Not Found)</span>
                            <button
                                onclick="battleTabsManager.removeCreatureFromTab('${tabId}', '${instanceId}'); event.stopPropagation();"
                                class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
                            >×</button>
                        </div>
                    </div>
                `;
            }

            // HP bar calculation
            const hpPercentage = instance.maxHP && instance.currentHP !== null
                ? Math.max(0, Math.min(100, (instance.currentHP / instance.maxHP) * 100))
                : 0;

            const hpColor = hpPercentage > 50 ? 'bg-green-500' : hpPercentage > 25 ? 'bg-yellow-500' : 'bg-red-500';

            return `
                <div class="p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition group">
                    <div class="flex justify-between items-start gap-2 mb-2">
                        <div class="flex-1 min-w-0 cursor-pointer" onclick="showCreatureDetails('${instance.name}', getAllCreatures()['${instance.name}'], ${typeof customCreatures !== 'undefined' && customCreatures.hasOwnProperty(instance.name)})">
                            <div class="font-medium text-sm truncate text-gray-900 dark:text-gray-100">${instance.displayName}</div>
                            <div class="text-xs text-gray-600 dark:text-gray-400">
                                CR ${creature.challenge_rating || creature.cr || '?'} • ${creature.type || '?'}
                            </div>
                        </div>
                        <button
                            onclick="battleTabsManager.removeCreatureFromTab('${tabId}', '${instanceId}'); event.stopPropagation();"
                            class="text-gray-400 hover:text-red-600 dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition"
                            title="Remove from tab"
                        >×</button>
                    </div>

                    <!-- HP Tracker -->
                    <div class="mt-2 space-y-1">
                        <div class="flex items-center gap-2 text-xs">
                            <div class="flex-1">
                                <div class="flex items-center gap-1">
                                    <span class="text-gray-600 dark:text-gray-400">HP:</span>
                                    <input
                                        type="number"
                                        value="${instance.currentHP !== null ? instance.currentHP : (instance.maxHP || 0)}"
                                        onchange="battleTabsManager.updateInstanceHP('${tabId}', '${instanceId}', 'currentHP', parseInt(this.value))"
                                        class="w-12 px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-center"
                                        min="0"
                                    />
                                    <span class="text-gray-500">/</span>
                                    <input
                                        type="number"
                                        value="${instance.maxHP || 0}"
                                        onchange="battleTabsManager.updateInstanceHP('${tabId}', '${instanceId}', 'maxHP', parseInt(this.value))"
                                        class="w-12 px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-center"
                                        min="1"
                                    />
                                </div>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="text-gray-600 dark:text-gray-400">Temp:</span>
                                <input
                                    type="number"
                                    value="${instance.tempHP || 0}"
                                    onchange="battleTabsManager.updateInstanceHP('${tabId}', '${instanceId}', 'tempHP', parseInt(this.value))"
                                    class="w-10 px-1 py-0.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-center"
                                    min="0"
                                />
                            </div>
                        </div>

                        <!-- HP Bar -->
                        ${instance.maxHP ? `
                            <div class="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-1.5 overflow-hidden">
                                <div class="${hpColor} h-full transition-all duration-300" style="width: ${hpPercentage}%"></div>
                            </div>
                        ` : ''}

                        <!-- Damage/Heal Buttons -->
                        <div class="flex gap-1">
                            <button
                                onclick="battleTabsManager.quickDamage('${tabId}', '${instanceId}', 5); event.stopPropagation();"
                                class="flex-1 px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition"
                                title="Deal 5 damage"
                            >-5</button>
                            <button
                                onclick="battleTabsManager.quickDamage('${tabId}', '${instanceId}', 1); event.stopPropagation();"
                                class="flex-1 px-2 py-1 bg-red-400 hover:bg-red-500 text-white text-xs rounded transition"
                                title="Deal 1 damage"
                            >-1</button>
                            <button
                                onclick="battleTabsManager.quickHeal('${tabId}', '${instanceId}', 1); event.stopPropagation();"
                                class="flex-1 px-2 py-1 bg-green-400 hover:bg-green-500 text-white text-xs rounded transition"
                                title="Heal 1 HP"
                            >+1</button>
                            <button
                                onclick="battleTabsManager.quickHeal('${tabId}', '${instanceId}', 5); event.stopPropagation();"
                                class="flex-1 px-2 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition"
                                title="Heal 5 HP"
                            >+5</button>
                        </div>

                        <!-- Custom Damage/Heal Input -->
                        <div class="flex gap-1 mt-1">
                            <div class="flex-1 flex items-center gap-1">
                                <input
                                    type="number"
                                    id="damage-input-${instanceId}"
                                    placeholder="0"
                                    class="w-full px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs text-center"
                                    min="0"
                                    onclick="event.stopPropagation();"
                                />
                                <button
                                    onclick="const input = document.getElementById('damage-input-${instanceId}'); const amount = parseInt(input.value) || 0; if (amount > 0) { battleTabsManager.quickDamage('${tabId}', '${instanceId}', amount); input.value = ''; } event.stopPropagation();"
                                    class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition whitespace-nowrap"
                                    title="Deal custom damage"
                                >Damage</button>
                            </div>
                            <div class="flex-1 flex items-center gap-1">
                                <input
                                    type="number"
                                    id="heal-input-${instanceId}"
                                    placeholder="0"
                                    class="w-full px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs text-center"
                                    min="0"
                                    onclick="event.stopPropagation();"
                                />
                                <button
                                    onclick="const input = document.getElementById('heal-input-${instanceId}'); const amount = parseInt(input.value) || 0; if (amount > 0) { battleTabsManager.quickHeal('${tabId}', '${instanceId}', amount); input.value = ''; } event.stopPropagation();"
                                    class="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition whitespace-nowrap"
                                    title="Heal custom amount"
                                >Heal</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // HP Management Methods
    updateInstanceHP(tabId, instanceId, field, value) {
        if (!this.battleTabs[tabId] || !this.battleTabs[tabId].creatures[instanceId]) return;

        const instance = this.battleTabs[tabId].creatures[instanceId];
        instance[field] = value;

        // If current HP set to null/undefined or changed, ensure it's a number
        if (field === 'currentHP' && instance.currentHP === null) {
            instance.currentHP = instance.maxHP || 0;
        }

        // Cap current HP at max HP
        if (field === 'currentHP' && instance.maxHP && instance.currentHP > instance.maxHP) {
            instance.currentHP = instance.maxHP;
        }

        this.saveBattleTabs();
        this.renderBattleTabsUI();
    }

    quickDamage(tabId, instanceId, amount) {
        if (!this.battleTabs[tabId] || !this.battleTabs[tabId].creatures[instanceId]) return;

        const instance = this.battleTabs[tabId].creatures[instanceId];

        // Apply damage to temp HP first
        if (instance.tempHP > 0) {
            if (instance.tempHP >= amount) {
                instance.tempHP -= amount;
                amount = 0;
            } else {
                amount -= instance.tempHP;
                instance.tempHP = 0;
            }
        }

        // Apply remaining damage to HP
        if (amount > 0 && instance.currentHP !== null) {
            instance.currentHP = Math.max(0, instance.currentHP - amount);
        }

        this.saveBattleTabs();
        this.renderBattleTabsUI();
    }

    quickHeal(tabId, instanceId, amount) {
        if (!this.battleTabs[tabId] || !this.battleTabs[tabId].creatures[instanceId]) return;

        const instance = this.battleTabs[tabId].creatures[instanceId];

        if (instance.currentHP !== null && instance.maxHP) {
            instance.currentHP = Math.min(instance.maxHP, instance.currentHP + amount);
        }

        this.saveBattleTabs();
        this.renderBattleTabsUI();
    }

    switchTab(tabId) {
        this.activeTab = tabId;
        this.renderBattleTabsUI();
    }

    showAddToTabModal(creatureName) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4';
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
                <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Add "${creatureName}" to Battle Tab
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    You can add the same creature multiple times for individual HP tracking
                </p>
                <div class="space-y-2">
                    ${Object.keys(this.battleTabs).map(tabId => {
                        const instanceCount = this.getInstanceCount(tabId, creatureName);
                        const totalCreatures = Object.keys(this.battleTabs[tabId].creatures).length;
                        return `
                            <button
                                onclick="battleTabsManager.toggleCreatureInTab('${tabId}', '${creatureName}'); this.closest('.fixed').remove();"
                                class="w-full px-4 py-3 rounded-lg text-left transition bg-gray-100 dark:bg-gray-700 border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400"
                            >
                                <div class="flex justify-between items-center">
                                    <div>
                                        <div class="font-medium text-gray-900 dark:text-gray-100">
                                            ${this.battleTabs[tabId].name}
                                        </div>
                                        <div class="text-xs text-gray-600 dark:text-gray-400">
                                            ${totalCreatures} total creatures${instanceCount > 0 ? ` • ${instanceCount} ${creatureName}` : ''}
                                        </div>
                                    </div>
                                    <div class="text-2xl text-purple-500">
                                        +
                                    </div>
                                </div>
                            </button>
                        `;
                    }).join('')}
                </div>
                <button
                    onclick="this.closest('.fixed').remove()"
                    class="mt-4 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition"
                >
                    Done
                </button>
            </div>
        `;

        document.body.appendChild(modal);
    }

    toggleCreatureInTab(tabId, creatureName) {
        // Always add a new instance (no longer toggles remove)
        this.addCreatureToTab(tabId, creatureName);
        this.renderBattleTabsUI();
    }

    promptNewTab() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4';
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
                <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Create New Battle Tab
                </h3>
                <input
                    type="text"
                    id="new-tab-name"
                    placeholder="Enter tab name (e.g., Boss Fight, Random Encounters)"
                    class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 mb-4"
                    maxlength="25"
                    autofocus
                />
                <div class="flex gap-2">
                    <button
                        onclick="this.closest('.fixed').remove()"
                        class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition"
                    >
                        Cancel
                    </button>
                    <button
                        onclick="battleTabsManager.createTabFromInput(); this.closest('.fixed').remove();"
                        class="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                    >
                        Create Tab
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Focus input and allow Enter key to create
        setTimeout(() => {
            const input = document.getElementById('new-tab-name');
            if (input) {
                input.focus();
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.createTabFromInput();
                        modal.remove();
                    }
                });
            }
        }, 100);
    }

    createTabFromInput() {
        const input = document.getElementById('new-tab-name');
        const name = input ? input.value.trim() : '';
        const tabId = this.createNewTab(name || null);
        this.activeTab = tabId;
        this.renderBattleTabsUI();
    }

    confirmDeleteTab(tabId) {
        const tabName = this.battleTabs[tabId]?.name || 'this tab';
        const creatureCount = this.battleTabs[tabId] ? Object.keys(this.battleTabs[tabId].creatures).length : 0;

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4';
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
                <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Delete Battle Tab?
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Are you sure you want to delete <strong>"${tabName}"</strong>?
                    ${creatureCount > 0 ? `<br><span class="text-red-600 dark:text-red-400">This will remove ${creatureCount} creature(s) from this tab.</span>` : ''}
                </p>
                <div class="flex gap-2">
                    <button
                        onclick="this.closest('.fixed').remove()"
                        class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition"
                    >
                        Cancel
                    </button>
                    <button
                        onclick="battleTabsManager.deleteTab('${tabId}'); battleTabsManager.renderBattleTabsUI(); this.closest('.fixed').remove();"
                        class="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                    >
                        Delete Tab
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }
}

// Initialize global instance
let battleTabsManager = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    battleTabsManager = new BattleTabsManager();

    // Render battle tabs UI if container exists
    if (document.getElementById('battle-tabs-container')) {
        battleTabsManager.renderBattleTabsUI();
    }
});
