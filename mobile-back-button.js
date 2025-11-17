/**
 * Mobile Back Button Handler
 * Handles Android back button:
 * - Single tap: Go back to previous screen (like X button)
 * - Double tap within 2 seconds: Exit app
 */

class MobileBackButtonHandler {
    constructor() {
        this.lastBackPress = 0;
        this.backPressInterval = 2000; // 2 seconds for double-tap
        this.viewHistory = [];
        this.currentView = 'main';
        this.initialized = false;

        this.init();
    }

    init() {
        // Only run in Capacitor (mobile apps)
        if (!window.Capacitor) {
            console.log('Mobile Back Button: Not in Capacitor, skipping');
            return;
        }

        // Check if App plugin is available
        if (!window.Capacitor.Plugins || !window.Capacitor.Plugins.App) {
            console.warn('Mobile Back Button: Capacitor App plugin not available');
            return;
        }

        this.setupBackButtonListener();
        this.setupViewTracking();
        this.initialized = true;
        console.log('Mobile Back Button: Initialized');
    }

    setupBackButtonListener() {
        const { App } = window.Capacitor.Plugins;

        // Listen for back button
        App.addListener('backButton', ({ canGoBack }) => {
            console.log('Back button pressed, canGoBack:', canGoBack);

            // Check if we're at the main view
            if (this.isAtMainView()) {
                this.handleExitApp();
            } else {
                this.goBack();
            }
        });

        console.log('Mobile Back Button: Listener registered');
    }

    setupViewTracking() {
        // Track when modals/details are opened
        this.trackModalOpening();
        this.trackDetailsOpening();
    }

    trackModalOpening() {
        // Override openCreatureForm
        const originalOpenForm = window.openCreatureForm;
        if (originalOpenForm) {
            window.openCreatureForm = () => {
                this.pushView('creature-form');
                originalOpenForm();
            };
        }

        // Override closeCreatureForm
        const originalCloseForm = window.closeCreatureForm;
        if (originalCloseForm) {
            window.closeCreatureForm = () => {
                this.popView();
                originalCloseForm();
            };
        }
    }

    trackDetailsOpening() {
        // Override showCreatureDetails
        const originalShowDetails = window.showCreatureDetails;
        if (originalShowDetails) {
            window.showCreatureDetails = (name, creature, isCustom) => {
                this.pushView('creature-details');
                originalShowDetails(name, creature, isCustom);
            };
        }

        // Track when details modal closes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.removedNodes.forEach((node) => {
                    if (node.id === 'creatureDetailsModal' || node.id === 'creatureFormModal') {
                        this.popView();
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true });
    }

    pushView(viewName) {
        this.viewHistory.push(this.currentView);
        this.currentView = viewName;
        console.log('View pushed:', viewName, 'History:', this.viewHistory);
    }

    popView() {
        if (this.viewHistory.length > 0) {
            this.currentView = this.viewHistory.pop();
            console.log('View popped, current:', this.currentView, 'History:', this.viewHistory);
        }
    }

    isAtMainView() {
        return this.currentView === 'main' && this.viewHistory.length === 0;
    }

    goBack() {
        console.log('Going back from:', this.currentView);

        // Close any open modals
        const detailsModal = document.getElementById('creatureDetailsModal');
        const formModal = document.getElementById('creatureFormModal');

        if (detailsModal) {
            detailsModal.remove();
            this.popView();
            return;
        }

        if (formModal) {
            if (typeof closeCreatureForm === 'function') {
                closeCreatureForm();
            } else {
                formModal.remove();
            }
            this.popView();
            return;
        }

        // If no modals, check for other closeable elements
        const closeButtons = document.querySelectorAll('[onclick*="remove()"]');
        if (closeButtons.length > 0) {
            closeButtons[0].click();
            this.popView();
            return;
        }

        // If nothing to close, go to main
        this.currentView = 'main';
        this.viewHistory = [];
    }

    handleExitApp() {
        const now = Date.now();
        const timeSinceLastPress = now - this.lastBackPress;

        if (timeSinceLastPress < this.backPressInterval) {
            // Double tap - exit app
            console.log('Double back press - exiting app');
            this.exitApp();
        } else {
            // Single tap - show toast
            this.lastBackPress = now;
            this.showExitToast();
        }
    }

    showExitToast() {
        // Remove any existing toast
        const existingToast = document.getElementById('exit-toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast
        const toast = document.createElement('div');
        toast.id = 'exit-toast';
        toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
        toast.innerHTML = `
            <div class="flex items-center gap-2">
                <span>Press back again to exit</span>
            </div>
        `;

        document.body.appendChild(toast);

        // Auto-remove after 2 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.add('animate-fade-out');
                setTimeout(() => toast.remove(), 300);
            }
        }, 2000);
    }

    exitApp() {
        if (!window.Capacitor || !window.Capacitor.Plugins || !window.Capacitor.Plugins.App) {
            console.log('Cannot exit app - not in Capacitor');
            return;
        }

        const { App } = window.Capacitor.Plugins;
        App.exitApp();
    }

    // Manual methods for testing
    simulateBackPress() {
        if (this.isAtMainView()) {
            this.handleExitApp();
        } else {
            this.goBack();
        }
    }
}

// Initialize global instance
let mobileBackButtonHandler = null;

// Initialize on device ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for Capacitor to fully load
    setTimeout(() => {
        mobileBackButtonHandler = new MobileBackButtonHandler();
    }, 100);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .animate-fade-in {
        animation: fade-in 0.3s ease-out;
    }

    .animate-fade-out {
        animation: fade-out 0.3s ease-out;
    }
`;
document.head.appendChild(style);
