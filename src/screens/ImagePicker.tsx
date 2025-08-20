import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native'
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker'

const ImagePickerScreen = () => {
  const [selectedImage, setSelectedImage] = useState<ImageOrVideo | null>(null)

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        if (Platform.OS === 'android' && Platform.Version < 30) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission',
                    message: 'App needs access to storage to download the file',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                throw new Error('Storage permission denied');
            }
        }
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your storage to select images.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (err) {
        console.warn(err)
        return false
      }
    }
    return true
  }

  useEffect(() => {
    requestStoragePermission()
  },[])

  const pickImage = async () => {
    const hasPermission = await requestStoragePermission()
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Cannot access gallery without permission.')
      return
    }

    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
      })
      setSelectedImage(image)
    } catch (error) {
      console.log('Image pick cancelled:', error)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image
          source={{ uri: selectedImage.path }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 12,
  },
})

export default ImagePickerScreen
