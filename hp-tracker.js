/**
 * HP Tracker Feature
 * Manages current HP, temporary HP with increase/decrease controls
 * Features:
 * - Track current HP (capped at maximum)
 * - Track temporary HP (independent pool)
 * - Increase/decrease buttons with validation
 * - Reset to maximum HP button
 * - Persistent storage per creature
 * - Visual indicators for HP status
 */

class HPTracker {
    constructor() {
        this.hpData = {}; // Stores HP data per creature: { creatureName: { current: X, max: Y, temp: Z } }
        this.loadHPData();
    }

    loadHPData() {
        const storage = this.getStorage();
        if (!storage) return;

        const stored = storage.getItem('creatureHPData');
        if (stored) {
            try {
                this.hpData = JSON.parse(stored);
            } catch (e) {
                console.error('Error loading HP data:', e);
                this.hpData = {};
            }
        }
    }

    saveHPData() {
        const storage = this.getStorage();
        if (!storage) return;
        storage.setItem('creatureHPData', JSON.stringify(this.hpData));
    }

    getStorage() {
        try {
            return window.localStorage || window.sessionStorage || null;
        } catch (e) {
            return null;
        }
    }

    // Parse HP string like "58 (9d8 + 18)" to get max HP number
    parseMaxHP(hpString) {
        if (!hpString) return 0;

        // Try to extract the first number
        const match = hpString.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
    }

    // Initialize or get HP data for a creature
    initCreatureHP(creatureName, hpString) {
        if (!this.hpData[creatureName]) {
            const maxHP = this.parseMaxHP(hpString);
            this.hpData[creatureName] = {
                current: maxHP,
                max: maxHP,
                temp: 0
            };
            this.saveHPData();
        } else {
            // Update max HP if creature HP changed
            const maxHP = this.parseMaxHP(hpString);
            if (this.hpData[creatureName].max !== maxHP) {
                this.hpData[creatureName].max = maxHP;
                // Don't reset current HP, just update max
                if (this.hpData[creatureName].current > maxHP) {
                    this.hpData[creatureName].current = maxHP;
                }
                this.saveHPData();
            }
        }
        return this.hpData[creatureName];
    }

    // Get HP data for a creature
    getCreatureHP(creatureName) {
        return this.hpData[creatureName] || null;
    }

    // Modify current HP
    modifyCurrentHP(creatureName, amount) {
        if (!this.hpData[creatureName]) return false;

        const data = this.hpData[creatureName];
        let newHP = data.current + amount;

        // Clamp between 0 and max
        newHP = Math.max(0, Math.min(newHP, data.max));

        data.current = newHP;
        this.saveHPData();
        return true;
    }

    // Reset current HP to maximum
    resetCurrentHP(creatureName) {
        if (!this.hpData[creatureName]) return false;

        this.hpData[creatureName].current = this.hpData[creatureName].max;
        this.saveHPData();
        return true;
    }

    // Modify temporary HP
    modifyTempHP(creatureName, amount) {
        if (!this.hpData[creatureName]) return false;

        const data = this.hpData[creatureName];
        let newTemp = data.temp + amount;

        // Temp HP can't go below 0
        newTemp = Math.max(0, newTemp);

        data.temp = newTemp;
        this.saveHPData();
        return true;
    }

    // Set temporary HP to specific value
    setTempHP(creatureName, value) {
        if (!this.hpData[creatureName]) return false;

        this.hpData[creatureName].temp = Math.max(0, value);
        this.saveHPData();
        return true;
    }

    // Reset temporary HP to 0
    resetTempHP(creatureName) {
        return this.setTempHP(creatureName, 0);
    }

    // Get HP percentage for visual indicators
    getHPPercentage(creatureName) {
        if (!this.hpData[creatureName]) return 100;

        const data = this.hpData[creatureName];
        if (data.max === 0) return 100;

        return Math.round((data.current / data.max) * 100);
    }

    // Get HP status color
    getHPStatusColor(percentage) {
        if (percentage > 75) return 'text-green-600 dark:text-green-400';
        if (percentage > 50) return 'text-yellow-600 dark:text-yellow-400';
        if (percentage > 25) return 'text-orange-600 dark:text-orange-400';
        return 'text-red-600 dark:text-red-400';
    }

    // Render HP tracker UI for creature details modal
    renderHPTracker(creatureName, hpString) {
        const hpData = this.initCreatureHP(creatureName, hpString);
        const percentage = this.getHPPercentage(creatureName);
        const statusColor = this.getHPStatusColor(percentage);

        return `
            <div class="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                <h3 class="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">
                    💚 HP Tracker
                </h3>

                <!-- Current HP Section -->
                <div class="mb-4 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Current HP</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">${percentage}%</span>
                    </div>

                    <div class="flex items-center gap-2 mb-2">
                        <button
                            onclick="hpTracker.modifyCurrentHP('${creatureName.replace(/'/g, "\\'")}', -10); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold text-lg transition"
                            title="Decrease by 10"
                        >-10</button>
                        <button
                            onclick="hpTracker.modifyCurrentHP('${creatureName.replace(/'/g, "\\'")}', -1); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold text-xl transition"
                            title="Decrease by 1"
                        >-</button>

                        <div class="flex-1 text-center">
                            <div class="text-2xl font-bold ${statusColor}" id="current-hp-display">
                                ${hpData.current}
                            </div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">
                                / ${hpData.max}
                            </div>
                        </div>

                        <button
                            onclick="hpTracker.modifyCurrentHP('${creatureName.replace(/'/g, "\\'")}', 1); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-xl transition"
                            title="Increase by 1"
                        >+</button>
                        <button
                            onclick="hpTracker.modifyCurrentHP('${creatureName.replace(/'/g, "\\'")}', 10); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-lg transition"
                            title="Increase by 10"
                        >+10</button>
                    </div>

                    <!-- HP Progress Bar -->
                    <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            id="hp-progress-bar"
                            class="h-full transition-all duration-300 ${percentage > 75 ? 'bg-green-500' : percentage > 50 ? 'bg-yellow-500' : percentage > 25 ? 'bg-orange-500' : 'bg-red-500'}"
                            style="width: ${percentage}%"
                        ></div>
                    </div>

                    <button
                        onclick="hpTracker.resetCurrentHP('${creatureName.replace(/'/g, "\\'")}'); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                        class="w-full mt-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition"
                    >
                        🔄 Reset to Max (${hpData.max})
                    </button>
                </div>

                <!-- Temporary HP Section -->
                <div class="p-3 bg-white dark:bg-gray-900 rounded-lg border border-purple-300 dark:border-purple-600">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-purple-700 dark:text-purple-300">Temporary HP</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">Absorbs damage first</span>
                    </div>

                    <div class="flex items-center gap-2 mb-2">
                        <button
                            onclick="hpTracker.modifyTempHP('${creatureName.replace(/'/g, "\\'")}', -10); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold text-lg transition"
                            title="Decrease by 10"
                        >-10</button>
                        <button
                            onclick="hpTracker.modifyTempHP('${creatureName.replace(/'/g, "\\'")}', -1); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold text-xl transition"
                            title="Decrease by 1"
                        >-</button>

                        <div class="flex-1 text-center">
                            <div class="text-2xl font-bold text-purple-600 dark:text-purple-400" id="temp-hp-display">
                                ${hpData.temp}
                            </div>
                            <div class="text-xs text-gray-500 dark:text-gray-400">
                                Temp HP
                            </div>
                        </div>

                        <button
                            onclick="hpTracker.modifyTempHP('${creatureName.replace(/'/g, "\\'")}', 1); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold text-xl transition"
                            title="Increase by 1"
                        >+</button>
                        <button
                            onclick="hpTracker.modifyTempHP('${creatureName.replace(/'/g, "\\'")}', 10); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                            class="w-10 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold text-lg transition"
                            title="Increase by 10"
                        >+10</button>
                    </div>

                    <button
                        onclick="hpTracker.resetTempHP('${creatureName.replace(/'/g, "\\'")}'); hpTracker.updateHPDisplay('${creatureName.replace(/'/g, "\\'")}')"
                        class="w-full mt-2 px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded text-sm font-medium transition"
                    >
                        🔄 Reset Temp HP
                    </button>
                </div>

                <!-- HP Summary -->
                <div class="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-center text-sm">
                    <span class="font-semibold text-blue-700 dark:text-blue-300">
                        Total Effective HP: ${hpData.current + hpData.temp}
                    </span>
                    <span class="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        (${hpData.current} + ${hpData.temp} temp)
                    </span>
                </div>
            </div>
        `;
    }

    // Update HP display after modification
    updateHPDisplay(creatureName) {
        const hpData = this.getCreatureHP(creatureName);
        if (!hpData) return;

        // Update current HP display
        const currentHPDisplay = document.getElementById('current-hp-display');
        if (currentHPDisplay) {
            const percentage = this.getHPPercentage(creatureName);
            const statusColor = this.getHPStatusColor(percentage);
            currentHPDisplay.textContent = hpData.current;
            currentHPDisplay.className = `text-2xl font-bold ${statusColor}`;

            // Update progress bar
            const progressBar = document.getElementById('hp-progress-bar');
            if (progressBar) {
                progressBar.style.width = percentage + '%';

                // Update progress bar color
                let barColor = 'bg-green-500';
                if (percentage <= 75) barColor = 'bg-yellow-500';
                if (percentage <= 50) barColor = 'bg-orange-500';
                if (percentage <= 25) barColor = 'bg-red-500';

                progressBar.className = `h-full transition-all duration-300 ${barColor}`;
            }
        }

        // Update temp HP display
        const tempHPDisplay = document.getElementById('temp-hp-display');
        if (tempHPDisplay) {
            tempHPDisplay.textContent = hpData.temp;
        }

        // Update total effective HP in summary
        const totalHP = hpData.current + hpData.temp;
        const summaryElements = document.querySelectorAll('.font-semibold.text-blue-700, .font-semibold.text-blue-300');
        summaryElements.forEach(el => {
            if (el.textContent.includes('Total Effective HP')) {
                const parent = el.parentElement;
                if (parent) {
                    parent.innerHTML = `
                        <span class="font-semibold text-blue-700 dark:text-blue-300">
                            Total Effective HP: ${totalHP}
                        </span>
                        <span class="text-xs text-gray-600 dark:text-gray-400 ml-1">
                            (${hpData.current} + ${hpData.temp} temp)
                        </span>
                    `;
                }
            }
        });
    }

    // Delete HP data for a creature (when creature is deleted)
    deleteCreatureHP(creatureName) {
        if (this.hpData[creatureName]) {
            delete this.hpData[creatureName];
            this.saveHPData();
            return true;
        }
        return false;
    }

    // Clear all HP data
    clearAllHP() {
        this.hpData = {};
        this.saveHPData();
    }
}

// Initialize global instance
let hpTracker = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    hpTracker = new HPTracker();
    console.log('HP Tracker initialized');
});
