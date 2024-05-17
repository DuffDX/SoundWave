import React from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';

const App = () => {
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "We need access to your camera to scan soundwaves.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera");
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to SoundWave App</Text>
      <Button title="Scan Soundwave" onPress={requestCameraPermission} />
    </View>
  );
};

export default App;