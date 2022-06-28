import React from 'react';
import {Input, Center, Stack, FormControl, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function OTP() {
  const {navigate} = useNavigation();
  return (
    <Center safeArea h="full">
      <Stack space="4" w="full" p="4">
        <FormControl>
          <FormControl.Label>Enter OTP</FormControl.Label>

          <Input size="2xl" p="4" keyboardType={'numeric'} />
        </FormControl>
        <Button onPress={() => navigate('Home' as never)} size="lg">
          Submit
        </Button>
      </Stack>
    </Center>
  );
}
