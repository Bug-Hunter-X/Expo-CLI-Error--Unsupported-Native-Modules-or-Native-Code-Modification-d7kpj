//Original Code (bug.js)
// import { NativeModules } from 'react-native'; // Causes error in Expo managed workflow
// const { MyNativeModule } = NativeModules;
// MyNativeModule.doSomething();

// Solution Code (bugSolution.js)
import * as ExpoModules from 'expo-modules-core';

// Check if module is available in Expo environment
if(ExpoModules.isAvailable('MyExpoModule')){
  const {MyExpoModule} = ExpoModules;
  MyExpoModule.doSomething();
}
else {
  console.warn('Expo Module MyExpoModule is not available, functionality limited');
}