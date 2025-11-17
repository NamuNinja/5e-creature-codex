/**
 * AdMob Configuration for 5e Creature Codex
 * Banner ads only - 100% of revenue goes to Extra Life charity
 */

class AdMobManager {
    constructor() {
        this.adMob = null;
        this.bannerShown = false;

        // AdMob Banner Unit IDs (REAL IDs - NO PLACEHOLDERS)
        this.config = {
            banner: {
                android: 'ca-app-pub-9910832991526056/8899630510', // Real Android banner ID
                ios: 'ca-app-pub-9910832991526056/8899630510'      // Real iOS banner ID
            }
        };

        this.init();
    }

    async init() {
        // Wait for device ready
        if (!window.Capacitor) {
            console.log('AdMob: Not running in Capacitor, ads disabled');
            return;
        }

        // Check if AdMob plugin is available
        if (!window.AdMob) {
            console.warn('AdMob plugin not installed. Run: npm install @capacitor-community/admob');
            return;
        }

        this.adMob = window.AdMob;

        try {
            // Initialize AdMob with COPPA & GDPR Compliance
            await this.adMob.initialize({
                requestTrackingAuthorization: true,
                testingDevices: [],
                initializeForTesting: false,

                // COPPA & GDPR COMPLIANCE:
                tagForChildDirectedTreatment: true,  // COPPA compliance
                tagForUnderAgeOfConsent: true,       // GDPR compliance (EU)
                maxAdContentRating: 'G'              // Family-safe ads only
            });

            console.log('AdMob initialized successfully (COPPA/GDPR compliant)');

            // Show banner ad
            await this.showBanner();

        } catch (error) {
            console.error('AdMob initialization error:', error);
        }
    }

    async showBanner() {
        if (!this.adMob || this.bannerShown) return;

        try {
            const platform = window.Capacitor.getPlatform();
            const adId = platform === 'ios' ? this.config.banner.ios : this.config.banner.android;

            await this.adMob.showBanner({
                adId: adId,
                adSize: 'BANNER',
                position: 'TOP_CENTER',
                margin: 0,
                isTesting: false,
                npa: true  // Non-personalized ads (GDPR/COPPA safe)
            });

            this.bannerShown = true;
            console.log('Banner ad shown');

            // Adjust content for banner ad
            this.adjustForBanner();

        } catch (error) {
            console.error('Banner ad error:', error);
        }
    }

    async hideBanner() {
        if (!this.adMob || !this.bannerShown) return;

        try {
            await this.adMob.hideBanner();
            this.bannerShown = false;
            console.log('Banner ad hidden');
        } catch (error) {
            console.error('Hide banner error:', error);
        }
    }

    adjustForBanner() {
        // Add padding to body to prevent content from being covered by banner
        const style = document.createElement('style');
        style.id = 'admob-banner-style';
        style.textContent = `
            body {
                padding-top: 50px !important;
            }

            #bannerAd {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize AdMob when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Capacitor to be ready
    setTimeout(() => {
        window.adMobManager = new AdMobManager();
    }, 500);
});
