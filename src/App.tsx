import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={styles.container}>
      <Text>Hello World 👋🌍!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default YourApp;