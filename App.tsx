/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider} from 'native-base';
// import Home from './src/screens/Home';

import OTP from './src/screens/OTP';

const App = () => {
  return (
    <NativeBaseProvider>
      <OTP />
    </NativeBaseProvider>
  );
};
export default App;
