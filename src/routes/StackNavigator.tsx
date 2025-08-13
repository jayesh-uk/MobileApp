import * as React from 'react'
import { View, Text } from 'react-native'
import { createStaticNavigation, type StaticParamList } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'

export type RootStackParamList = {
  Home: undefined
  Info: { id?: string }
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type InfoScreenProps = NativeStackScreenProps<RootStackParamList, 'Info'>

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Home: HomeScreen,
    Info: InfoScreen,
  },
})

export const StackNavigation = createStaticNavigation(RootStack)
