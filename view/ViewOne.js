import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
const PlaceholderImage = require('../assets/images/background-image.png');
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export function ViewOne() {
const [selectedImage, setSelectedImage] = useState(null);
const [showAppOptions, setShowAppOptions] = useState(false);

//launchImageLibraryAsync() 方法返回一个包含有关所选图像信息的对象。
const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
//    <NavigationContainer>
        <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
                />
              </View>
              {showAppOptions ? (
              <View />)
              : (
              <View style={styles.footerContainer}>
                        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
                        <Button label="use this photo" onPress={() => setShowAppOptions(true)}></Button>
                    </View>
              )}

              <StatusBar style="auto" />
            </View>
//    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
});


