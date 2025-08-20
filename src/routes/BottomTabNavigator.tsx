import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import NetworkStatusScreen from '../screens/InternetConnectivity';
import { Feather } from '@react-native-vector-icons/feather'
import BluetoothConnection from '../screens/BluetoothConnection';
import ImagePickerScreen from '../screens/ImagePicker';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => <Feather name="home" size={24} />
          }} />
          <Tab.Screen name="Bluetooth" component={BluetoothConnection} options={{
            tabBarIcon: () => <Feather name="bluetooth" size={24} />
          }} />
          <Tab.Screen name="Internet" component={NetworkStatusScreen} options={{
            tabBarIcon: () => <Feather name="wifi" size={24} />
          }} />
          <Tab.Screen name="Picker" component={ImagePickerScreen} options={{
            tabBarIcon: () => <Feather name="image" size={24} />
          }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs