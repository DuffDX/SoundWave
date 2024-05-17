import React from 'react';
import { View, Text, Button, PermissionsAndroid, Platform, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

const App = () => {
  const requestCameraPermission = async () => {
    console.log("Requesting camera permission..."); // Debugging log
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
          Alert.alert("Permission Granted", "You can use the camera");
        } else {
          console.log("Camera permission denied");
          Alert.alert("Permission Denied", "Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
        Alert.alert("Error", "An error occurred while requesting camera permission");
      }
    } else {
      // iOS permissions handling
      console.log("iOS platform detected");
      Alert.alert("iOS Platform", "iOS platform detected");
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