/**
 * Android Integration for Creature Codex
 * Handles Capacitor plugins and Android-specific features
 */

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeAndroidFeatures();
});

async function initializeAndroidFeatures() {
    // Check if running in Capacitor
    if (!window.Capacitor) {
        console.log('Running in web mode');
        return;
    }

    console.log('Running in Capacitor on:', window.Capacitor.getPlatform());

    // Initialize status bar
    if (window.StatusBar) {
        try {
            await window.StatusBar.setBackgroundColor({ color: '#5D5CDE' });
            await window.StatusBar.setStyle({ style: 'DARK' });
        } catch (error) {
            console.error('StatusBar error:', error);
        }
    }

    // Hide splash screen
    if (window.SplashScreen) {
        try {
            setTimeout(async () => {
                await window.SplashScreen.hide();
            }, 2000);
        } catch (error) {
            console.error('SplashScreen error:', error);
        }
    }

    // Handle Android back button
    if (window.App) {
        window.App.addListener('backButton', handleBackButton);
    }

    // Remove download button on Android (not needed)
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }

    // Adjust UI for mobile
    adjustMobileUI();
}

function handleBackButton() {
    // Close modal if open
    const modal = document.getElementById('creatureModal');
    if (modal && modal.classList.contains('active')) {
        closeModal();
    } else {
        // Exit app
        if (window.App) {
            window.App.exitApp();
        }
    }
}

function adjustMobileUI() {
    // Add mobile-specific styles
    const style = document.createElement('style');
    style.textContent = `
        /* Mobile optimizations */
        body {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
        }

        /* Adjust for notch/safe area */
        body {
            padding-top: env(safe-area-inset-top);
            padding-bottom: calc(env(safe-area-inset-bottom) + 80px);
        }

        /* Better touch targets */
        .creature-card {
            min-height: 100px;
        }

        button, .cr-filter {
            min-height: 44px;
        }

        /* Optimize for performance */
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    `;
    document.head.appendChild(style);
}

// Override showCreature to track for ads
const originalShowCreature = window.showCreature;
if (originalShowCreature) {
    window.showCreature = function(name) {
        // Call original function
        originalShowCreature(name);

        // Track creature view for ads
        if (window.adMobManager) {
            window.adMobManager.onCreatureView();
        }
    };
}

// Disable download function on Android
if (window.Capacitor) {
    window.downloadThisFile = function() {
        // Show message instead
        alert('This app is already installed on your device. No download needed!');
    };
}
