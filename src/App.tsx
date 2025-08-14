import React from 'react';
import { StackNavigation } from './routes/StackNavigator';
import BottomTabs from './routes/BottomTabNavigator'

const App = () => {
  return (
    false ? (
      <StackNavigation />
    ) : (
      <BottomTabs />
    ) 
  );
};

export default App;