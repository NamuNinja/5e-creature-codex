/**
 * Web Ads Configuration using Google AdSense
 * Shows banner ad at top of page for web users
 */
class WebAdManager {
    constructor() {
        this.adShown = false;
        this.isWeb = !window.Capacitor; // True for web browsers, false for mobile apps

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

        // REPLACE THIS with your actual AdSense ID
        // Get it from: https://www.google.com/adsense/
        script.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX');

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
            background: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #e0e0e0;
            padding: 10px 0;
            box-sizing: border-box;
        `;

        // Create AdSense ad unit
        const adUnit = document.createElement('ins');
        adUnit.className = 'adsbygoogle';
        adUnit.style.cssText = 'display:inline-block;width:728px;height:90px';

        // REPLACE THESE with your actual AdSense IDs
        // Get from: https://www.google.com/adsense/ → Ads → By ad unit
        adUnit.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX');
        adUnit.setAttribute('data-ad-slot', 'YYYYYYYYYY');

        // Responsive ad (works on mobile too)
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
        } catch (error) {
            console.error('Web Ads: Error initializing banner', error);
        }
    }

    showAdBlockMessage() {
        // Optional: Show a friendly message if ads are blocked
        const message = document.createElement('div');
        message.style.cssText = `
            width: 100%;
            padding: 10px;
            background: #fff3cd;
            border-bottom: 1px solid #ffc107;
            text-align: center;
            font-size: 14px;
            color: #856404;
        `;
        message.innerHTML = `
            <p style="margin: 0;">
                ℹ️ Ads help support this free tool. Please consider disabling your ad blocker.
            </p>
        `;

        document.body.insertBefore(message, document.body.firstChild);
    }
}

// Initialize web ads (only runs in browser, not in Capacitor apps)
const webAdManager = new WebAdManager();
