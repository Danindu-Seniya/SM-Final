import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Router, router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Emergency = () => {
  const handleRequestMedicalAssistance = () => {
    // Logic to handle request for medical assistance
  };

  const handleRequestSecurityAssistance = () => {
    // Logic to handle request for security assistance
  };

  const handlePublicEmergencyServices = () => {
    // Logic to handle public emergency services
  };

  return (
    <View>
      <SafeAreaView>
      <Image source={require('../../assets/images/emergency-bell.png')} style={styles.imageStyle} />
      <Text style={styles.heading}>Emergency{"\n"}Services</Text>

          <View style={styles.container}>
            {/* Button for Request Medical Assistance */}
            <TouchableOpacity style={styles.button1} onPress={()=>router.push("/emergencyServ/reqMedical")}>
              
              
            <FontAwesome6 name="square-plus" size={30} color="black" bottom={20} marginLeft= {40} /> 
              <Text style={styles.buttonText1}>Medical{"\n"}Services</Text>
            </TouchableOpacity>

            {/* Button for Request Security Assistance */}
            <TouchableOpacity style={styles.button2} onPress={()=>router.push("/emergencyServ/reqSecurity")}>
              
            <MaterialIcons name="security" size={30} color="black" bottom={20} marginLeft= {40}/>
              <Text style={styles.buttonText2}>Security{"\n"}Services</Text>
            </TouchableOpacity>

            {/* Button for Public Emergency Services */}
            <TouchableOpacity style={styles.button3} onPress={()=>router.push("/emergencyServ/publicEmergency")}>
              
            <MaterialCommunityIcons name="bell-ring-outline" size={30} color="black" marginLeft= {55}/>
              <Text style={styles.buttonText3}>Public Emergency{"\n"}Services</Text>
            </TouchableOpacity>
          </View>
        
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF0FA'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    
    color: 'black',
    bottom: -130,
    textAlign: 'center',
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    height: 135,
    width: 135,
    bottom: -370,
    marginLeft: -160,
    backgroundColor:'white'
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    height: 135,
    width: 135,
    marginLeft: 160,
    bottom: -225,
  },
  button3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    height: 120,
    width: 300,
    bottom: -230,
    
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: -40,
    bottom: -15,
    textAlign: 'center',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: -40,
    bottom: -15,
    textAlign: 'center',
  },
  buttonText3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },

  imageStyle: {
    width: 121,
    height: 121,
    alignSelf: 'center',
    bottom: -120,
  },
});

export default Emergency;
