import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../routes/StackNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

function HomeScreen() {
    const navigator = useNavigation<NavigationProp>();

    const GoToInfo = () => {
        navigator.navigate('Info', {
            id:'2025'
        })
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title={"Go To Info"} onPress={GoToInfo} />
    </View>
  );
}

export default HomeScreen