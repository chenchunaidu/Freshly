import React from 'react';
import {Input, Center, Stack, FormControl, Button} from 'native-base';

export default function Login() {
  return (
    <Center safeArea h="full">
      <Stack space="2" w="full" p="4">
        <FormControl>
          <FormControl.Label>Mobile No</FormControl.Label>
          <Input size="2xl" p="4" placeholder="9010000527" />
        </FormControl>
        <Button onPress={() => console.log('hello world')} size="lg">
          Click Me
        </Button>
      </Stack>
    </Center>
  );
}
