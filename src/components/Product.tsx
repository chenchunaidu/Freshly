import React, {FC} from 'react';
import {Image, Heading, VStack, Button, Text} from 'native-base';

interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const Product: FC<ProductProps> = ({name, description, price = 100, image}) => {
  return (
    <VStack background="white" p="4" borderRadius="lg" space="1" mt="4">
      <Image
        source={{
          uri: image,
        }}
        alt="Alternate Text"
        size="2xl"
        resizeMode="stretch"
        width="full"
        borderRadius="lg"
      />
      <Heading size="sm">{name}</Heading>
      <Text color="gray.600">{description}</Text>
      <Heading size="lg">Rs {price}/-</Heading>
      <Button onPress={() => console.log('hello world')} size="lg" py="3">
        Add to cart
      </Button>
    </VStack>
  );
};

export default Product;
