/**
 * Web Ads Configuration using Google AdSense
 * Publisher ID: pub-7410111422192267
 * Shows banner ad at top of page for web users
 * 100% of revenue goes to Extra Life charity
 */
class WebAdManager {
    constructor() {
        this.adShown = false;
        this.isWeb = !window.Capacitor; // True for web browsers, false for mobile apps
        this.publisherId = 'pub-7410111422192267';

        if (this.isWeb) {
            console.log('Web Ads: Running in browser, initializing AdSense');
            this.init();
        } else {
            console.log('Web Ads: Running in Capacitor, using AdMob instead');
        }
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadAdSense());
        } else {
            this.loadAdSense();
        }
    }

    loadAdSense() {
        console.log('Web Ads: Loading Google AdSense');

        // Load AdSense script
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';

        // AdSense Publisher ID
        script.setAttribute('data-ad-client', 'ca-pub-7410111422192267');

        script.onload = () => {
            console.log('Web Ads: AdSense script loaded successfully');
            this.showBanner();
        };

        script.onerror = () => {
            console.warn('Web Ads: Failed to load AdSense (may be blocked by ad blocker)');
            this.showAdBlockMessage();
        };

        document.head.appendChild(script);
    }

    showBanner() {
        if (this.adShown) {
            console.log('Web Ads: Banner already shown');
            return;
        }

        // Create banner container
        const adContainer = document.createElement('div');
        adContainer.id = 'web-ad-banner';
        adContainer.className = 'web-ad-container';
        adContainer.style.cssText = `
            width: 100%;
            min-height: 90px;
            background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #5D5CDE;
            padding: 10px 0;
            box-sizing: border-box;
        `;

        // Create AdSense ad unit
        const adUnit = document.createElement('ins');
        adUnit.className = 'adsbygoogle';
        adUnit.style.cssText = 'display:block;';

        // AdSense Configuration
        adUnit.setAttribute('data-ad-client', 'ca-pub-7410111422192267');

        // Auto ads (Google will automatically choose the best ad format)
        adUnit.setAttribute('data-ad-format', 'auto');
        adUnit.setAttribute('data-full-width-responsive', 'true');

        adContainer.appendChild(adUnit);

        // Insert at top of page
        const body = document.body;
        if (body.firstChild) {
            body.insertBefore(adContainer, body.firstChild);
        } else {
            body.appendChild(adContainer);
        }

        // Initialize the ad
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            this.adShown = true;
            console.log('Web Ads: Banner initialized successfully');

            // Adjust page padding
            this.adjustPagePadding();
        } catch (error) {
            console.error('Web Ads: Error initializing banner', error);
        }
    }

    adjustPagePadding() {
        // Add padding to prevent content from being covered
        const style = document.createElement('style');
        style.id = 'web-ad-style';
        style.textContent = `
            body {
                padding-top: 0 !important;
            }

            #web-ad-banner {
                position: sticky;
                top: 0;
                z-index: 1000;
            }
        `;
        document.head.appendChild(style);
    }

    showAdBlockMessage() {
        // Show a friendly message if ads are blocked
        const message = document.createElement('div');
        message.style.cssText = `
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-bottom: 2px solid #5D5CDE;
            text-align: center;
            font-size: 14px;
            color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        `;
        message.innerHTML = `
            <p style="margin: 0; font-weight: 500;">
                💜 Ads support this free tool & 100% of revenue goes to Extra Life charity
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.9;">
                Please consider disabling your ad blocker to help children's hospitals
            </p>
        `;

        document.body.insertBefore(message, document.body.firstChild);
    }

    /**
     * Optional: Show additional in-feed ads
     * Call this method to insert ads between content sections
     */
    showInFeedAd(targetElement) {
        if (!this.isWeb) return;

        const adContainer = document.createElement('div');
        adContainer.className = 'in-feed-ad';
        adContainer.style.cssText = `
            width: 100%;
            min-height: 250px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 10px;
        `;

        const adUnit = document.createElement('ins');
        adUnit.className = 'adsbygoogle';
        adUnit.style.cssText = 'display:block;';
        adUnit.setAttribute('data-ad-client', 'ca-pub-7410111422192267');
        adUnit.setAttribute('data-ad-format', 'fluid');
        adUnit.setAttribute('data-ad-layout-key', '-6t+ed+2i-1n-4w');

        adContainer.appendChild(adUnit);
        targetElement.appendChild(adContainer);

        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            console.log('Web Ads: In-feed ad initialized');
        } catch (error) {
            console.error('Web Ads: Error initializing in-feed ad', error);
        }
    }
}

// Initialize web ads (only runs in browser, not in Capacitor apps)
const webAdManager = new WebAdManager();
