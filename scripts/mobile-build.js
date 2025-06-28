#!/usr/bin/env node

const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

console.log("🔥 SaintSal™ Mobile Build Process Starting...\n")

// Build steps
const steps = [
  {
    name: "📦 Installing Capacitor dependencies",
    command:
      "npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios @capacitor/app @capacitor/splash-screen @capacitor/status-bar @capacitor/keyboard @capacitor/push-notifications --save",
    required: true
  },
  {
    name: "🏗️ Building Next.js for mobile",
    command: "cp next.config.mobile.js next.config.js && npm run build",
    required: true
  },
  {
    name: "📱 Initializing Capacitor",
    command: 'npx cap init "SaintSal" "com.saintvision.saintsal" --web-dir=out',
    required: false // May already be initialized
  },
  {
    name: "🤖 Adding Android platform",
    command: "npx cap add android",
    required: false
  },
  {
    name: "🍎 Adding iOS platform",
    command: "npx cap add ios",
    required: false
  },
  {
    name: "🔄 Syncing web assets",
    command: "npx cap sync",
    required: true
  },
  {
    name: "📋 Copying assets",
    command: "npx cap copy",
    required: true
  }
]

// Execute build steps
for (const step of steps) {
  try {
    console.log(`⚡ ${step.name}...`)
    execSync(step.command, {
      stdio: "inherit",
      cwd: process.cwd()
    })
    console.log(`✅ ${step.name} completed\n`)
  } catch (error) {
    if (step.required) {
      console.error(`❌ ${step.name} failed:`, error.message)
      process.exit(1)
    } else {
      console.log(`⚠️ ${step.name} skipped (may already exist)\n`)
    }
  }
}

// Create mobile-specific configurations
console.log("📝 Creating mobile configurations...")

// Android configuration
const androidManifest = `
<resources>
    <string name="app_name">SaintSal™</string>
    <string name="title_activity_main">SaintSal™ - Cookin' Knowledge</string>
    <string name="package_name">com.saintvision.saintsal</string>
    <string name="custom_url_scheme">saintsal</string>
</resources>
`

// iOS configuration
const iosInfo = {
  CFBundleDisplayName: "SaintSal™",
  CFBundleName: "SaintSal",
  CFBundleShortVersionString: "1.0.0",
  CFBundleVersion: "1",
  CFBundleIdentifier: "com.saintvision.saintsal",
  CFBundleURLTypes: [
    {
      CFBundleURLName: "com.saintvision.saintsal",
      CFBundleURLSchemes: ["saintsal"]
    }
  ],
  NSCameraUsageDescription:
    "SaintSal™ needs camera access for document scanning",
  NSMicrophoneUsageDescription:
    "SaintSal™ needs microphone access for voice commands",
  NSLocationWhenInUseUsageDescription:
    "SaintSal™ uses location for local business discovery"
}

// Write configurations
try {
  // Ensure directories exist
  const androidDir = path.join(
    process.cwd(),
    "android",
    "app",
    "src",
    "main",
    "res",
    "values"
  )
  const iosDir = path.join(process.cwd(), "ios", "App", "App")

  if (fs.existsSync(androidDir)) {
    fs.writeFileSync(path.join(androidDir, "strings.xml"), androidManifest)
    console.log("✅ Android configuration created")
  }

  if (fs.existsSync(iosDir)) {
    const existingInfo = fs.existsSync(path.join(iosDir, "Info.plist"))
      ? JSON.parse(fs.readFileSync(path.join(iosDir, "Info.plist"), "utf8"))
      : {}

    const mergedInfo = { ...existingInfo, ...iosInfo }
    fs.writeFileSync(
      path.join(iosDir, "Info.plist"),
      JSON.stringify(mergedInfo, null, 2)
    )
    console.log("✅ iOS configuration created")
  }
} catch (configError) {
  console.log("⚠️ Configuration setup completed with warnings")
}

// Create build scripts
const packageJsonPath = path.join(process.cwd(), "package.json")
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))

packageJson.scripts = {
  ...packageJson.scripts,
  "mobile:build": "node scripts/mobile-build.js",
  "mobile:android": "npx cap run android",
  "mobile:ios": "npx cap run ios",
  "mobile:sync": "npm run build && npx cap sync",
  "mobile:open:android": "npx cap open android",
  "mobile:open:ios": "npx cap open ios"
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log(`
🎉 SaintSal™ Mobile Build Complete!

📱 Next Steps:

1. 🤖 Android Development:
   npm run mobile:open:android
   # Opens Android Studio for final build & testing

2. 🍎 iOS Development:
   npm run mobile:open:ios
   # Opens Xcode for final build & testing

3. 🔄 Sync changes:
   npm run mobile:sync
   # Rebuilds web assets and syncs to mobile

4. 🚀 Run on device:
   npm run mobile:android
   npm run mobile:ios

📦 Mobile Apps Ready:
   - Android: ./android/
   - iOS: ./ios/

🎯 App Store Deployment:
   - Ensure Apple Developer account
   - Configure Android signing keys
   - Set up app store assets

🔥 SaintSal™ is now mobile-ready!
`)
