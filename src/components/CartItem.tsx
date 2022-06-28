import React, {FC} from 'react';
import {Image, Heading, VStack, Text, HStack} from 'native-base';

interface CartItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const CartItem: FC<CartItemProps> = ({
  name,
  description,
  price = 100,
  image,
}) => {
  return (
    <HStack background="white" p="4" borderRadius="lg" mt="2" space="4">
      <Image
        source={{
          uri: image,
        }}
        alt="Alternate Text"
        size="md"
        resizeMode="cover"
        borderRadius="lg"
      />
      <VStack maxW="50%">
        <Heading size="sm">{name}</Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <Heading size="sm">Rs {price}</Heading>
    </HStack>
  );
};

export default CartItem;
