import React from 'react';
import {Heading, VStack, Text} from 'native-base';
import Products from '../components/Products';

export default function Home() {
  return (
    <VStack space="2" safeArea>
      <VStack p="4">
        <Heading>Freshly</Heading>
        <Text>
          Now you can buy fresh fruits and veggies directly from local farmers
          near you.{' '}
        </Text>
      </VStack>
      <Products />
    </VStack>
  );
}
