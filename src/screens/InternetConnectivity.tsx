import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const NetworkStatusScreen = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected && state.isInternetReachable !== false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={[styles.status, { color: isConnected ? 'green' : 'red' }]}>
        {isConnected === null ? 'Checking...' : isConnected ? 'Connected' : 'No Internet Connection'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  status: {
    fontSize: 20,
    fontWeight: '600',
  },
})

export default NetworkStatusScreen
