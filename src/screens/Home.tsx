import React from 'react';
import {VStack, Text} from 'native-base';
import Products from '../components/Products';
import Header from '../components/Header';

export default function Home() {
  return (
    <VStack space="2" safeArea>
      <VStack p="4" shadow="1" background="white">
        <Header />
        <Text>
          Now you can buy fresh fruits and veggies directly from local farmers
          near you.{' '}
        </Text>
      </VStack>
      <Products />
    </VStack>
  );
}
