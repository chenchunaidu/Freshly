import React from 'react';
import {VStack, Button} from 'native-base';
import CartItems from '../components/CartItems';
import {useNavigation} from '@react-navigation/native';

export default function Cart() {
  const {navigate} = useNavigation();
  return (
    <VStack p="4" space="4">
      <CartItems />
      <Button size="lg" py="3" onPress={() => navigate('Order' as never)}>
        Place order
      </Button>
    </VStack>
  );
}
