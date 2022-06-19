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
import Home from './src/screens/Home';

const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};
export default App;
