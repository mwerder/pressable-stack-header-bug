# About

Repo to reproduce [bug](https://github.com/software-mansion/react-native-screens/issues/2219#issuecomment-2633587313) where `<Pressable/>` is not responsive for android Devices.

(`<Button />` `<TouchableOpacity />` are also not working)

Only reproducable on Android Device, works on Android Emulator and iOS Device/Emulator.

Tested on Google Pixel 6 (Android 15)

Bug appears in Expo Go as well as in Expo development build

# Setup

Project setup:

`npx create-expo-app --template blank pressable-bug-repro`

install dependencies:

`npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`


