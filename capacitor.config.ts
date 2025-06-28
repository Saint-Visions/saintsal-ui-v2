import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "com.saintvision.saintsal",
  appName: "SaintSal™",
  webDir: "out",
  server: {
    androidScheme: "https"
  },
  plugins: {
    App: {
      launchShowDuration: 2000
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#000000",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      spinnerColor: "#D4AF37"
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#000000"
    },
    Keyboard: {
      resize: "body",
      style: "dark"
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      releaseType: "APK"
    }
  },
  ios: {
    scheme: "SaintSal"
  }
}

export default config
