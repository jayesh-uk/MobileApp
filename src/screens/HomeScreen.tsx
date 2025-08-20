import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { RootStackParamList } from '../routes/StackNavigator';
import data from '../data/MOCK_DATA.json'
import axios from 'axios';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

function HomeScreen() {
    const navigator = useNavigation<NavigationProp>();
    // const [data, setData] = React.useState([])
    // const [currentPage, setCurrentPage] = React.useState(1);

    const GoToInfo = () => {
        navigator.navigate('Info', {
            id:'2025'
        })
    }

    // const getData = () => {
    //   axios.get(`//page=${currentPage}`).then((response) => {
    //     setData(response)
    //   }).catch(err=> console.log(err))
    // }

    // const loadMoreItems = (nextPage: number) => {
    //  axios.get(`//page=${nextPage}`).then((response) => {
    //     setData(response)
    //   }).catch(err=> console.log(err)) 
    // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList 
        data={data}
        // horizontal
        keyExtractor={(item,index) => index.toString()}
        initialNumToRender={10}
        // getItemLayout={()}
        // onEndReached={loadMoreItems}
        renderItem={({item}) => (
          <View style={{height:100, padding:20, borderWidth:1}}>
            <Text>{item.first_name}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default HomeScreen