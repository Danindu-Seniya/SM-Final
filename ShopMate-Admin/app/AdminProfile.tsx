import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Pressable, ScrollView, Modal, TextInput } from "react-native";
import { Text, View } from "@/components/Themed";
import { Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../firebaseconfig";
import ReviewCard from "@/components/ReviewCard";
import React from "react";


export default function TabThreeScreen() {

  const [isReviews, setIsReviews] = useState<boolean>(true);
  const [isEditBioModalVisible, setIsEditBioModalVisible] = useState<boolean>(false);

  const img1 = require("../assets/images/Shop1.jpeg")
  const img2 = require("../assets/images/Shop2.jpeg")

  const handleEditBio = () => {
    setIsEditBioModalVisible(true);
  };

  const handleSaveBio = () => {
    updateDoc
    setIsEditBioModalVisible(false);
  };

  //user details update 

  const [fName, setFName] = useState("");
  const[lName, setLName] = useState("");
  const[age, setAge] = useState("");
  const[email,setEmail] = useState("");
  const[gender,setGender] = useState("");
  const[image,setImage] = useState("");
  const[mobnum,setMobnum] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const Snapshot = await getDocs(collection(FIREBASE_DB, "admin"));
        Snapshot.forEach((doc) => {
          // Set details from Firestore data
          setFName(doc.data().fname);
          setLName(doc.data().lName);
          setAge(doc.data().Age);
          setEmail(doc.data().Email);
          setGender(doc.data().gender);
          setImage(doc.data().image);
          setMobnum(doc.data().Mobile);

        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    //  Main cotainer
    
    <ScrollView style={{ flex: 1}} contentContainerStyle={{ alignItems: "center", justifyContent: "flex-end", width: "100%" }}>
      
      {/* Sub container */}
      
      <View style={{ flex: 1, paddingTop: -20, borderTopEndRadius: 20, borderTopStartRadius: 50, width: '100%', backgroundColor: "#EEF0FA" }}>
        <Image
          style={{ width: 85, height: 85, borderRadius: 100, zIndex: 10, marginLeft: 290,bottom: -40, }}
          source={require("../assets/images/Staff2.jpg")}   
        />
        

        
          
        
        <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems: 'center',width: '100%' , height: 220, bottom: 110, borderRadius: 25, backgroundColor: "#2E77E5"}}></View>

        {/* Text */}
        <View style={{ marginTop: 80, flexDirection: "column", gap: 10, paddingHorizontal: 20, backgroundColor: "transparent", width: "100%" }}>
          <View style={{ backgroundColor: "transparent", bottom: 330, }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "left",color: "white" }}>Name: {fName} </Text>
          
          <View style={{ flexDirection: "row", gap: 10, backgroundColor: "transparent", }}>
            <Text style={{ fontSize: 20, color: 'white'}}>Email: </Text>
            <Text style={{ fontSize: 20, color: 'white'}}>{email}</Text>
          </View>
        </View>

        {/* button set */}

        <View style={{ marginTop: 40, flexDirection: "row", backgroundColor: "transparent", width: "100%", alignSelf: "center", alignItems: "center", }}>
          <Pressable
            onPress={()=>setIsReviews(true)}
            style={[styles.button, isReviews ? styles.selectedButton : null]}
          >
            <FontAwesome name="thumbs-up" size={24} color="black" />
            <Text style={[styles.buttonText, isReviews ? styles.selectedButtonText : null]}>Usage</Text>
          </Pressable>

          <Pressable
            onPress={()=>setIsReviews(false)}
            style={[styles.button, !isReviews ? styles.selectedButton : null]}
          >
            <AntDesign name="edit" size={24} color="black" />
            <Text style={[styles.buttonText, !isReviews ? styles.selectedButtonText : null]}>Bio</Text>
          </Pressable>
        </View>

        {/* Reviews View */}
        {isReviews ?
          (<ScrollView style={{ flex: 1, flexDirection: "column", rowGap: 25, marginTop: 20, paddingVertical: 30, bottom: 380, }}>

            <ReviewCard props={{ name: "Chillz", text: "Very Tasty and Good customer Service with great offers.", date: "Today", img: img1 }} />

            <ReviewCard props={{ name: "KickSpot", text: "High quality shoes and they have great offers. Highly recommended.", date: "14/01/2024", img: img2 }} />


          </ScrollView>)
          :
          (<View style={{backgroundColor:"white", width:"100%", alignSelf:"center", paddingHorizontal:20,paddingVertical:30, rowGap:10, borderRadius:10, marginTop:40, bottom: 350,}}>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Name</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>{fName} {lName}</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Age</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: {age}</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Gender</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: {gender}</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Mobile Number</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: {mobnum}</Text>
            </View>


            <Pressable
    style={styles.editButton}
    onPress={() => handleEditBio()}
  >
    <Text style={styles.editButtonText}>Edit Bio</Text>
  </Pressable>

          </View>)

}

     {/* Edit Bio Modal */}
          <Modal
          style={styles.editBioModal}
        visible={isEditBioModalVisible}
        transparent={false}
        animationType="slide"
        onRequestClose={() => setIsEditBioModalVisible(false)}
      >
        <View style={styles.editBioModalContainer}>
          <View style={styles.editBioModalContent}>
            <Text style={styles.modalTitle}>Edit Bio</Text>
            
            {/* Profile Picture */}
            <View style={styles.profilePictureContainer}>
              <Image
                style={styles.profilePicture}
                source={require("../assets/images/Staff2.jpg")}   
              />
              <TouchableOpacity style={styles.editProfileButton}>
              <MaterialCommunityIcons name="pencil-circle" size={24} color="black" />
                <Text style={styles.editProfileText}>Edit Profile Photo</Text>
              </TouchableOpacity>
            </View>
            
            {/* Text Inputs */}
            <TextInput style={styles.inputField} placeholder="First Name" onChangeText={setFName} />
            <TextInput style={styles.inputField} placeholder="Last Name" onChangeText={setLName} />
            <TextInput style={styles.inputField} placeholder="Age" onChangeText={setAge}/>
            <TextInput style={styles.inputField} placeholder="Gender" onChangeText={setGender} />
            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveBio}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      </View>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  age: {
    fontSize: 18,
  },
  gender: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 5, // Added margin for spacing between buttons
    bottom: 350
  },
  selectedButton: {
    backgroundColor: "#739EDE",
  },
  buttonText: {
    fontSize: 15,
    bottom: -8, 
    fontWeight: 'bold'
  },
  selectedButtonText: {
    color: "#fff",
  },
  editButton: {
    backgroundColor: "#2E77E5", 
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 125,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 10, 
  },
  editButtonText: {
    fontSize: 18,
    color: "#fff",

  },

  editBioModal: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    
  },
  editBioModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
    
  },
  editBioModalContent: {
    backgroundColor: "#EEF0FA",
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputField: {
    width: '90%',
   backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#2E77E5',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 125,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profilePictureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "#EEF0FA",
    
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editProfileButton: {
    marginLeft: -38,
    marginTop: 75,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  editProfileIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  
  },
  editProfileText: {
    color: '#252525',
    fontWeight: 'bold',
  },
});
