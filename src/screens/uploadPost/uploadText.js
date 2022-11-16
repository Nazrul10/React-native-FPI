
import { signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Button from "../../components/text/button";
import Input from "../../components/text/input";

import { auth, db } from "../login";

const dbs = db;
const UploadText = () => {
  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState('')
    const createPost = async () =>{
      if (date == '') {
        alert('Please Enter Date');
        return;
      } 
      if (title == '') {
        alert('Please Enter title');
        return;
      } 
      if (description == '') {
        alert('Please Enter description');
        return;
      } 
        setLoading(true)
        try{          
            await addDoc(collection(dbs, "posts"), {
                title: title,
                description: description,
                id:'123456',
                date: date
              });
              setLoading(false)
              showMessage({
                message: "Your post is uploaded!",
                type: "success",
              });
              setTitle('')
              setDescription('')
              alert('Your post is uploaded!') 
          }
          catch(error){
            showMessage({
                message: "ERROR!",
                type: "danger",
              });
              setLoading(false)
              alert('upload failed!') 
          } 
    };
    //log out
    const logOut = ()=>{
            signOut(auth)
            alert('Log out success!')
    }
    return (
        <SafeAreaView style={{marginHorizontal: 30, flex: 1}}>
            <Text style={styles.text}>Create a valuable post</Text>

            <Input required={true} placeholder={"Date : 20/12/2022"} keyboardType={"phone-pad"} onChangeText={(text)=> setDate(text)}/>

            <Input required={true} placeholder={"Title"} autoCapitalize={"none"} onChangeText={(text)=> setTitle(text)} />
            <Input required={true} multiline={true} placeholder={"Description"} autoCapitalize={"none"} onChangeText={(text)=> setDescription(text)} />
            {loading ?(
            <ActivityIndicator/>
            ):(
                <Button onPress={createPost} customeStyle={{alignSelf: 'center', marginTop: 40}} title={'POST'}/>)}
            <Pressable onPress={logOut}>
            <Text style={{textAlign:'center', marginTop: 20, color:'red'}}>
              Log out from this page!
              </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default UploadText;

const styles = StyleSheet.create({
    text:{
        padding: 15,
        fontWeight: 'bold',
        marginVertical: 6,
        borderRadius:10,
        fontSize: 20,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        textAlign:'center'
    },
    selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
      imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
      },
      progressBarContainer: {
        marginTop: 20
      },
      imageBox: {
        width: 300,
        height: 300
      }
})