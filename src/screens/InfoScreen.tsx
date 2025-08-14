import * as React from 'react';
import { View, Text } from 'react-native';

function InfoScreen({route}:any) {
  const { data } = route?.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
    </View>
  );
}

export default InfoScreen