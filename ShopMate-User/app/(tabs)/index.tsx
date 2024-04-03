import React from "react";
import { StyleSheet, TouchableOpacity, Pressable } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
     <View style={styles.container}>
      <FontAwesome5 name="map-marker-alt" size={160} color="black" />
      <Text style={styles.title}>Navigate Easily</Text>
      <Text style={styles.sentence}>
        Find your destination easy and fast{"\n"}
        with Augmented Reality
      </Text>

      <View style={styles.buttonWrapper}>

        <Text style={styles.buttonWrapperText}>
          Click Next to start your Navigation{" "}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/navigationScreen")}>
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 10,
    color: "#2E77E5",
  },
  sentence: {
    fontSize: 16,
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#2E77E5",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
  },
  buttonWrapperText: {
    fontWeight: "bold",
    paddingVertical: 10,
  },
});


