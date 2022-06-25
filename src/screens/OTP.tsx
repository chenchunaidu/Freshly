import React from 'react';
import {Input, Center, Stack, FormControl, Button, HStack} from 'native-base';

export default function OTP() {
  return (
    <Center safeArea h="full">
      <Stack space="4" w="full" p="4">
        <FormControl>
          <FormControl.Label>Enter OTP</FormControl.Label>
          <HStack space="6">
            <Input size="2xl" p="4" w="16%" />
            <Input size="2xl" p="4" w="16%" />
            <Input size="2xl" p="4" w="16%" />
            <Input size="2xl" p="4" w="16%" />
          </HStack>
        </FormControl>
        <Button onPress={() => console.log('hello world')} size="lg">
          Click Me
        </Button>
      </Stack>
    </Center>
  );
}
