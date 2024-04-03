import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Help: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Report a problem</Text>
    
      {/* Adding textboxes */}
      
      <Text style={styles.textbox1}>About Staff</Text>
      <TextInput style={styles.input} placeholder="Type here..." />
      <TouchableOpacity onPress={handleReport}>
        <Text style={styles.reportText1}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReport}>
        
      </TouchableOpacity>
      <Text style={styles.textbox2}>About Shops</Text>
      <TextInput style={styles.input} placeholder="Type here..." />
      <TouchableOpacity onPress={handleReport}>
        <Text style={styles.reportText1}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReport}>
        
      </TouchableOpacity>
      <Text style={styles.textbox3}>About Apps</Text>
      <TextInput style={styles.input} placeholder="Type here..." />
      <TouchableOpacity onPress={handleReport}>
        <Text style={styles.reportText1}>Report</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const handleReport = () => {
  // Add functionality to handle the report
  console.log("Report button pressed");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF0FA'
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: -140,
    bottom: 25
  },
  input: {
    height: 120,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    bottom: 40,
    paddingTop: -20,
  },
  textbox1: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: -200,
    bottom: 30,
  },
  textbox2: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: -190,
    bottom: 30,
  },
  textbox3: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: -200,
    bottom: 30,
  },
  reportText1: {
    fontSize: 16,
    color: '#2E77E5',
    textAlign: 'right',
    marginTop: 5,
    marginLeft: 200,
    bottom: 75,
    fontWeight: 'bold',
  },
  reportText2: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'right',
    marginTop: 5,
    marginLeft: 200,
    bottom: 140,
    fontWeight: 'bold',
  },
  reportText3: {
    fontSize: 16,
    color: 'black',
    textAlign: 'right',
    marginTop: 5,
    marginLeft: 200,
    bottom: 140,
    fontWeight: 'bold',
  },
});

export default Help;
