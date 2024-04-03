// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import {Camera} from "expo-camera";


export default function reqSecurity() {
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status === 'granted') {
        // Permission granted, initialize the camera
        await cameraRef.current?.initializeAsync({ type: Camera.Constants.Type.back });
      } else {
        // Permission denied, display an error message or handle it accordingly
        console.log('Camera permission not granted');
      }
    })();
  }, []);

  const handleCameraPress = async () => {
    // Take a photo or perform any other action with the camera
    // For simplicity, let's just log a message for now
    console.log('Take a photo or perform any other action with the camera');
  };

  

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={cameraRef}
      />
     <Fontisto name="map-marker-alt" size={150} color="red" bottom= {90} />
     <Text style={styles.title}>Share Your Location</Text>
     <Text style={styles.sentence}>
     Scan the closest shop front and{"\n"} 
     connect with the service.
     </Text>

     

       <Text style={styles.buttonWrapperText}>
         Click camera to connect{" "}
       </Text>

       
        <TouchableOpacity style={styles.button} onPress={handleCameraPress}>
          <MaterialIcons name="photo-camera" size={24} color="white" />
        </TouchableOpacity>
        </View>
       
     
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   paddingTop: 10,
   backgroundColor: '#EEF0FA'
 },
 title: {
   fontSize: 35,
   fontWeight: "bold",
   paddingTop: 10,
   bottom: 95
 },
 sentence: {
   fontSize: 14,
   alignItems: "center",
  textAlign: "center",
  bottom: 95,
 },
 
 button: {
  alignItems: "center",
  justifyContent: "center",
  width: 60,
  height: 60,
  borderRadius: 30,
  elevation: 3,
  backgroundColor: "#2E77E5",
  bottom: -60,
 },
 buttonText: {
   fontSize: 16,
   lineHeight: 21,
   fontWeight: "bold",
   letterSpacing: 0.25,
   color: "white",
   bottom: -100,
 },
 buttonWrapper: {
   alignItems: "center",
   justifyContent: "center",
   paddingTop: 150,
 },
 buttonWrapperText: {
   fontWeight: "bold",
   paddingVertical: 10,
   bottom: -60,
 },
 camera: {
  width: '100%',
  height: '100%',
},
});
