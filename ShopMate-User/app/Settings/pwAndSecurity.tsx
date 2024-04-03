import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const PasswordSecurity: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Login and Recovery</Text>
      <Text style={styles.text2}>Manage your passwords,{"\n"}
      login preferences and recovery methods.</Text>
      {/* Adding textboxes */}
      <Text style={styles.textbox1}>Change Password</Text>
      <TextInput style={styles.input} placeholder="Current password" />
      <TextInput style={styles.input} placeholder="New password" />
      <TextInput style={styles.input} placeholder="Re-type new password" />
      <Text style={styles.textbox2}>Change Email</Text>
      <TextInput style={styles.input} placeholder="New Email" />
      <Text style={styles.textbox3}>Change Mobile Number</Text>
      <TextInput style={styles.input} placeholder="New Mobile Number" />
      
    </View>
  );
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
    bottom: 95,
    marginLeft: -140,
  },
  text2: {
    fontSize: 16,
    marginLeft: -56,
    bottom: 95,
  },
  input: {
    height: 40,
    width: '80%',
    marginTop: 20,
    paddingHorizontal: 10,
    bottom: 80,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textbox1: {
    fontSize: 18,
    marginLeft: -150,
    bottom: 70,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textbox2: {
    fontSize: 18,
    marginLeft: -180,
    bottom: 70,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textbox3: {
    fontSize: 18,
    marginLeft: -110,
    bottom: 70,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default PasswordSecurity;