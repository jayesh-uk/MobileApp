import React from 'react';
import { StackNavigation } from './routes/StackNavigator';
import BottomTabs from './routes/BottomTabNavigator'

const App = () => {
  return (
    true ? (
      <StackNavigation />
    ) : (
      <BottomTabs />
    ) 
  );
};

export default App;