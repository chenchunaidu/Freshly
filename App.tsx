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
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import OTP from './src/screens/OTP';
import Login from './src/screens/Login';
import Cart from './src/screens/Cart';
import Order from './src/screens/Order';

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
  });
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerBackVisible: false}}
          />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
export default App;
