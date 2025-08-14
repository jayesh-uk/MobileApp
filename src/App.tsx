import React from 'react';
import { StackNavigation } from './routes/StackNavigator';
import BottomTabs from './routes/BottomTabNavigator'
import DrawerNavigation from './routes/DrawerNavigator'

const App = () => {
  return (
    // false ? (
    //   <StackNavigation />
    // ) : (
    //   <BottomTabs />
    // ) 
    <DrawerNavigation />
  );
};

export default App;