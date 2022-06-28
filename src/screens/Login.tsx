import React from 'react';
import {Input, Center, Stack, FormControl, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    mobileNo: yup
      .string()
      .required('Mobile number is required')
      .min(10, 'Mobile should not be less than 10 digits')
      .max(10, 'Mobile should not be grater than 10 digits'),
  })
  .required();

export default function Login() {
  const {navigate} = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      mobileNo: '',
    },
  });
  const onSubmit = data => {
    navigate('OTP' as never);
  };

  return (
    <Center safeArea h="full">
      <Stack space="2" w="full" p="4">
        <FormControl isInvalid={errors?.mobileNo?.message ? true : false}>
          <FormControl.Label>Mobile No</FormControl.Label>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                size="2xl"
                p="4"
                placeholder="9010000527"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="mobileNo"
          />
          <FormControl.ErrorMessage>
            {errors?.mobileNo?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <Button onPress={handleSubmit(onSubmit)} size="lg">
          Submit
        </Button>
      </Stack>
    </Center>
  );
}
