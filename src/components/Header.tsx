import React from 'react';
import {Heading, HStack, IconButton, Box, VStack, Badge} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const Header = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Heading>Freshly</Heading>
      <HStack>
        <HStack>
          <Box alignItems="center">
            <VStack>
              <Badge
                colorScheme="primary"
                rounded="full"
                mb={-6}
                mr={-2}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 12,
                }}>
                2
              </Badge>
              <IconButton
                size="lg"
                variant={'ghost'}
                _icon={{
                  as: Ionicons,
                  name: 'cart',
                }}
              />
            </VStack>
          </Box>
        </HStack>

        <IconButton
          variant={'ghost'}
          size="lg"
          _icon={{
            as: Ionicons,
            name: 'notifications-outline',
          }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
