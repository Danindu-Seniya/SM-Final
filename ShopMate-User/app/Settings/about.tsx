import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ShopMateText: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/SM4.png')}

        style={styles.image}
      />
      <Text style={styles.description}>
      With this app for shopping
      malls makes shopping easier and more fun! 
      With our app, you can use your phone to find your 
      way around the mall using cool AR technology. 
      It's like a treasure hunt - but for your favorite shops! 
      Plus, if you need help, you can find medical assistance, 
      security, and other helpful services right from the app. 
      And don't worry about missing out on deals or events 
      our app keeps you updated on all the exciting stuff 
      happening in the mall.{"\n"} 
      Shopping has never been this easy and enjoyable!
      </Text>
      <Text style={styles.number1}>ShopMate Support</Text>
      <Text style={styles.mobile}>01111111111</Text>
      <Text style={styles.number2}>Email</Text>
      <Text style={styles.email}>shopmate@gmail.com</Text>
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
  text: {
    fontSize: 33,
    fontWeight: 'bold',
    bottom: 120,
    color: 'black',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    color: 'black',
    bottom: 125,
  },
  number1: {
    fontSize: 19,
    marginHorizontal: 20,
    marginTop: 20,
    color: 'black',
    bottom: 110,
    fontWeight: 'bold',
    marginLeft: -140,
  },
  number2: {
    fontSize: 19,
    marginHorizontal: 20,
    marginTop: 20,
    color: 'black',
    bottom: 110,
    fontWeight: 'bold',
    marginLeft: -245,
  },
  mobile: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 20,
    color: '#5B95D7',
    bottom: 125,
    marginLeft: -190,
  },
  email: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 20,
    color: '#5B95D7',
    bottom: 130,
    marginLeft: -130,
  },
  image: {
    width: 200, // Adjust as needed
    height: 70, // Adjust as needed
    marginBottom: 20,
    bottom: 90,
  },
});

export default ShopMateText;
