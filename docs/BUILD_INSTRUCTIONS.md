# 5th Edition Compendium - Android App Build Instructions

## 🎯 Quick Overview

This guide will help you build the 5th Edition Creature Compendium as an Android app ready for Google Play Store submission.

## 📋 Prerequisites

### Required Software
1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/

2. **Android Studio** (Latest version)
   - Download from: https://developer.android.com/studio
   - Install Android SDK (API 33 or higher)
   - Install Android Build Tools
   - Install Android NDK

3. **Java Development Kit (JDK)** 11 or higher
   - Download from: https://adoptium.net/

4. **Gradle** (usually installed with Android Studio)

### Required Accounts
1. **Google Play Console Account** ($25 one-time fee)
   - Sign up at: https://play.google.com/console/

2. **Google AdMob Account** (Free)
   - Sign up at: https://admob.google.com/

## 🚀 Step-by-Step Build Process

### Step 1: Set Up AdMob

1. Create a new app in AdMob Console
2. Create ad units:
   - **Banner Ad** (for bottom of screen)
   - **Interstitial Ad** (shown after viewing creatures)
3. Copy your Ad Unit IDs

4. Update `www/admob-config.js`:
   ```javascript
   const AdMobConfig = {
       appId: 'YOUR_ADMOB_APP_ID',
       bannerAdId: 'YOUR_BANNER_AD_ID',
       interstitialAdId: 'YOUR_INTERSTITIAL_AD_ID',
       testMode: false  // Set to false for production
   };
   ```

5. Update `AndroidManifest.xml`:
   ```xml
   <meta-data
       android:name="com.google.android.gms.ads.APPLICATION_ID"
       android:value="YOUR_ADMOB_APP_ID"/>
   ```

### Step 2: Install Dependencies

```bash
# Navigate to the app directory
cd dnd-android-app

# Install Node.js dependencies
npm install

# Install Capacitor CLI globally (optional)
npm install -g @capacitor/cli
```

### Step 3: Initialize Capacitor

```bash
# Initialize Capacitor (if not already done)
npx cap init "5th Edition Compendium" "com.dnd.compendium"

# Add Android platform
npx cap add android

# Sync web assets to Android
npx cap sync android
```

### Step 4: Copy Resources

```bash
# Copy icons and splash screens to Android resources
# Icons should go to: android/app/src/main/res/mipmap-*
# Splash screens should go to: android/app/src/main/res/drawable-*

# You can use Android Studio's Image Asset Studio for this:
# Right-click res/ folder > New > Image Asset
```

### Step 5: Configure Signing (for Release Build)

1. Generate a signing key:
   ```bash
   keytool -genkey -v -keystore dnd-compendium.keystore \
           -alias dnd-compendium -keyalg RSA -keysize 2048 -validity 10000
   ```

2. Create `android/key.properties`:
   ```properties
   storeFile=../dnd-compendium.keystore
   storePassword=YOUR_KEYSTORE_PASSWORD
   keyAlias=dnd-compendium
   keyPassword=YOUR_KEY_PASSWORD
   ```

3. Update `android/app/build.gradle`:
   ```gradle
   android {
       ...
       signingConfigs {
           release {
               def keystorePropertiesFile = rootProject.file("key.properties")
               def keystoreProperties = new Properties()
               keystoreProperties.load(new FileInputStream(keystorePropertiesFile))

               keyAlias keystoreProperties['keyAlias']
               keyPassword keystoreProperties['keyPassword']
               storeFile file(keystoreProperties['storeFile'])
               storePassword keystoreProperties['storePassword']
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
               minifyEnabled false
               proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
           }
       }
   }
   ```

### Step 6: Add AdMob Plugin

```bash
# Install AdMob Capacitor plugin
npm install @capacitor-community/admob

# Sync changes
npx cap sync android
```

Update `capacitor.config.json` to include AdMob:
```json
{
  "plugins": {
    "AdMob": {
      "appId": "YOUR_ADMOB_APP_ID",
      "testingDevices": []
    }
  }
}
```

### Step 7: Build the App

#### For Testing (Debug Build)

```bash
# Open in Android Studio
npx cap open android

# Or build from command line
cd android
./gradlew assembleDebug

# APK will be at: android/app/build/outputs/apk/debug/app-debug.apk
```

#### For Release (Production Build)

```bash
# Build release APK
cd android
./gradlew assembleRelease

# Or build AAB (required for Play Store)
./gradlew bundleRelease

# Output files:
# APK: android/app/build/outputs/apk/release/app-release.apk
# AAB: android/app/build/outputs/bundle/release/app-release.aab
```

### Step 8: Test the App

1. **Install on Device:**
   ```bash
   adb install android/app/build/outputs/apk/debug/app-debug.apk
   ```

2. **Test Features:**
   - App launches correctly
   - Creatures load and display
   - Search and filters work
   - Creature details open
   - Ads display (test ads should show)
   - Back button works
   - No crashes or errors

### Step 9: Prepare for Play Store

1. **Update Version:**
   - Edit `android/app/build.gradle`:
     ```gradle
     defaultConfig {
         versionCode 1
         versionName "25.0.0"
     }
     ```

2. **Set Correct Package Name:**
   - Use your own package name (e.g., `com.yourstudio.dndcompendium`)
   - Update in `capacitor.config.json` and throughout Android files

3. **Create Privacy Policy:**
   - Required for AdMob
   - Host on your website or GitHub Pages
   - Include in Play Store listing

4. **Create App Listing Materials:**
   - See PLAY_STORE_REQUIREMENTS.md

## 📱 Testing Checklist

- [ ] App installs successfully
- [ ] App launches without crashes
- [ ] All 488 creatures load correctly
- [ ] Search functionality works
- [ ] CR filters work
- [ ] Type filters work
- [ ] Creature details modal opens/closes
- [ ] Dark mode works
- [ ] Ads display correctly
- [ ] No memory leaks
- [ ] Smooth scrolling
- [ ] Back button works properly
- [ ] App doesn't request unnecessary permissions

## 🐛 Troubleshooting

### Build Fails

**Problem:** Gradle build fails
**Solution:**
- Update Gradle: `./gradlew wrapper --gradle-version 8.0`
- Clear cache: `./gradlew clean`
- Check SDK versions in `build.gradle`

### Ads Don't Show

**Problem:** Test ads not displaying
**Solution:**
- Check AdMob App ID is correct
- Ensure `testMode: true` in `admob-config.js`
- Check Android Manifest has AdMob meta-data
- Verify internet permission is granted

### App Crashes on Launch

**Problem:** App crashes immediately
**Solution:**
- Check LogCat in Android Studio
- Verify all resources are copied
- Check package name consistency
- Ensure all dependencies are installed

### Icons Don't Show

**Problem:** App icon is generic Android icon
**Solution:**
- Verify icons are in correct `mipmap` folders
- Use Image Asset Studio in Android Studio
- Rebuild the app

## 📚 Additional Resources

- **Capacitor Docs:** https://capacitorjs.com/docs
- **Android Developer Guide:** https://developer.android.com/guide
- **AdMob Integration:** https://github.com/capacitor-community/admob
- **Play Store Guidelines:** https://support.google.com/googleplay/android-developer/

## 🎉 Success!

Once built, you'll have:
- ✅ Android APK for testing
- ✅ Android AAB for Play Store submission
- ✅ Ads integrated and working
- ✅ Professional app ready for distribution

## 📝 Important Notes

1. **Keep your keystore safe!** You cannot update your app without it.
2. **Test thoroughly** before submitting to Play Store.
3. **Update Ad IDs** from test to production before release.
4. **Follow Play Store policies** for content and advertising.
5. **Create a privacy policy** - required for apps with ads.

## 🚀 Next Steps

See `PLAY_STORE_SUBMISSION.md` for Play Store submission guide!
