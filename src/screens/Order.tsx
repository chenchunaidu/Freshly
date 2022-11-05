import React, {useEffect} from 'react';
import {VStack, Text} from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import {Permission} from 'react-native';

export default function Order() {
  useEffect(() => {
    if (PermissionStatus) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, []);
  return (
    <VStack p="4">
      <Text>Order</Text>
    </VStack>
  );
}
