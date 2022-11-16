import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from "../components/text/button";
import Input from "../components/text/input";
   
const firebaseConfig = {
    apiKey: "AIzaSyABLO4rJnx3B7g0LXTsMwwJwIs-9fWvaLE",
    authDomain: "fpi-project-79fe7.firebaseapp.com",
    projectId: "fpi-project-79fe7",
    storageBucket: "fpi-project-79fe7.appspot.com",
    messagingSenderId: "560136053749",
    appId: "1:560136053749:web:890dce60c61a5d801336bc"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = () =>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    showMessage({
        message: "login success!",
        type: "green",
    })
    // ...
  })
  .catch((error) => {
    showMessage({
        message: "please check your email",
        type: "danger",
    })
  });
    }
    return (
        <SafeAreaView style={{flex: 1}}>
        <Image style={{height: 300, width: 300, alignSelf: 'center', marginTop: 10}}
            source={require('../../assets/logimage.png')}/>
            <Text style={{textAlign:'center', color:'red', fontSize:18}}>
                Only admin can use this page!
            </Text>
            <View style={{paddingHorizontal: 30}}>
                
                <Input placeholder={"Email"} autoCapitalize={"none"} onChangeText={(text)=> setEmail(text)} />
                <Input placeholder={"Password"} secureTextEntry onChangeText={(text)=> setPassword(text)} />

                <Button onPress={submit} customeStyle={{alignSelf: 'center', marginTop: 40}} title={'Login'}/>
             
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    radioContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    outerCircle:{
        height: 20,
        width: 20,
        borderRadius: 50,
        color: 'red',
        borderWidth: 1,
        padding: 1.5
    },
    innerCircle:{
        height: 15,
        width: 15,
        borderRadius: 50,
        alignSelf: 'center',
    },
    selectedOuter:{
        borderColor: 'orange'
    },
    selectedInner:{
        backgroundColor: 'orange',
       borderRadius: 50,
    }
})