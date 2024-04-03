import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FIREBASE_AUTH } from "@/Firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.replace("./(tabs)");
      }
    });
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in");
      router.replace("./(tabs)");
    } catch (error: any) {
      console.log(error);
      alert("SignIn failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: "#E5E7F4" }]}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              router.push("/Start");
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" top={10} left={3} marginLeft={20} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1.5 }}>
          <Text style={{ fontSize: 24, alignItems: "flex-start", fontWeight: "bold" }}>Log In</Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 32, marginTop: 20, marginLeft: 20, fontWeight: "bold" }}>
          Welcome Back!
        </Text>
        <Text style={{ fontSize: 16, marginLeft: 20, marginTop: -6 }}>
          Sign in to your account
        </Text>
      </View>

      <View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text>Email:</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              height: 40,
              marginLeft: 5,
              marginRight: 5,
              paddingHorizontal: 10,
            }}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text>Password:</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              height: 40,
              marginLeft: 5,
              marginRight: 5,
              paddingHorizontal: 10,
            }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#2F7DF1",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop:500,
          marginHorizontal: 40,
          borderRadius: 10,
          bottom: 130
          
        }}
        onPress={signIn}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -1,
          marginHorizontal: 40,
          borderRadius: 10,
          
        }}
        onPress={() => router.push("/auth/RegisterUser")}
      >
        <Text
          style={{
            fontSize: 16,
            bottom: 130,
            fontWeight: "bold",
          }}
        >
          {"Create Account"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
