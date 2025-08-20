import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, PermissionsAndroid, Platform } from 'react-native'
import { BleManager, Device } from 'react-native-ble-plx'

const BluetoothConnection = () => {
  const [devices, setDevices] = useState<Device[]>([])
  const [manager] = useState(() => new BleManager())

  console.log("DEVICES:", devices)

  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === 'android' && Platform.Version >= 23) {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ])
      }
    }

    requestPermissions().then(startScan)

    return () => {
      manager.stopDeviceScan()
      manager.destroy()
    }
  }, [])

  const startScan = () => {
    setDevices([])
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error('Scan error:', error)
        return
      }

      if (device && device.name) {
        setDevices(prev => {
          const exists = prev.find(d => d.id === device.id)
          if (exists) return prev
          return [...prev, device]
        })
      }
    })

    setTimeout(() => {
      manager.stopDeviceScan()
    }, 10000) // stop scanning after 10s
  }

  const renderItem = ({ item }: { item: Device }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.name}>{item.name || 'Unnamed Device'}</Text>
      <Text style={styles.id}>{item.id}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Bluetooth Devices</Text>
      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  id: {
    fontSize: 12,
    color: '#555',
  },
})

export default BluetoothConnection
