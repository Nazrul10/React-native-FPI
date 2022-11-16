import { AntDesign, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Books from '../src/screens/book-list';
import Home from '../src/screens/home';
import Login, { app } from '../src/screens/login';
import Notices from '../src/screens/notices';
import Post from '../src/screens/post';
import Result from '../src/screens/result';
import { colors } from '../src/theme/color';
//auth
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Teachers from '../src/screens/teachers/teachers';
const auth = getAuth(app);
//
const THEME ={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background: 'white'
    }
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="AllHome" component={Home} />
    </HomeStack.Navigator>
  );
}
const NoticeStack = createNativeStackNavigator();
function NoticeStackScreen() {
  return (
    <NoticeStack.Navigator screenOptions={{headerShown: false}}>
      <NoticeStack.Screen name="AllNotice" component={Notices} />
    </NoticeStack.Navigator>
  );
}
const BookStack = createNativeStackNavigator();
function BookStackScreen() {
  return (
    <BookStack.Navigator screenOptions={{headerShown: false}}>
      <BookStack.Screen name="AllBooks" component={Books} />
    </BookStack.Navigator>
  );
}
const ResultStack = createNativeStackNavigator();
function ResultStackScreen() {
  return (
    <ResultStack.Navigator screenOptions={{headerShown: false}}>
      <ResultStack.Screen name="AllResult" component={Result} />
    </ResultStack.Navigator>
  );
}
const SignIn = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <SignIn.Navigator screenOptions={{headerShown: false}}>
      <SignIn.Screen name="SignIn" component={Login} />
    </SignIn.Navigator>
  );
}
const AdminPost = createNativeStackNavigator();
function PostStackScreen() {
  return (
    <AdminPost.Navigator screenOptions={{headerShown: false}}>
      <AdminPost.Screen name="Post" component={Post} />
    </AdminPost.Navigator>
  );
}
const TeacherPost = createNativeStackNavigator();
function TeacherStackScreen() {
  return (
    <TeacherPost.Navigator screenOptions={{headerShown: false}}>
      <TeacherPost.Screen name="Teachers" component={Teachers} />
    </TeacherPost.Navigator>
  );
}
export default function Navigation(){
  //auth
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  // useEffect(()=>{
  //   signOut(auth)
  // },[])

  useEffect(() => {
    const authSubcribe = onAuthStateChanged(auth, (user) =>{
      if(user){
        setUser(user)
        setLoading(false)
      }
      else{
        setUser(null)
        setLoading(false)
      }
    })
    return authSubcribe;
  },[])
  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator color="blue" size="large"/>
      </View>
    )
  }
  //
   return(
    <NavigationContainer theme={THEME}>
        <Tab.Navigator 
        initialRouteName='Home' 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.darkOrange,
            }}>
            <Tab.Screen 
            options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
                ),
            }}
             name="Home" 
             component={HomeStackScreen} 
             />
            <Tab.Screen 
            options={{title: 'Notice',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="note-text-outline" size={24} color={color} />
                ),
            }}
             name="Notice" 
             component={NoticeStackScreen} 
             />
            <Tab.Screen 
            options={{title: 'Book-list',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={24} color={color} />
                ),
            }} 
            name="Books" 
            component={BookStackScreen}
             />
            <Tab.Screen 
            options={{title: 'Result',
            tabBarIcon: ({ color, size }) => (
            <Foundation name="results" size={24} color={color} />
                ),
            }} 
            name="Result" 
            component={ResultStackScreen}
             />
            <Tab.Screen 
            options={{title: 'Teachers',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="team" size={24} color={color} />
                ),
            }} 
            name="Teacher" 
            component={TeacherStackScreen}
             />
            {!user? (<Tab.Screen 
            options={{title: 'Admin',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={24} color={color} />
                ),
            }} 
            name="Admin" 
            component={LoginStackScreen}
             />) :
            (<Tab.Screen 
            options={{title: 'Post',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="post-add" size={24} color={color} />
                ),
            }} 
            name="Post" 
            component={PostStackScreen}
             />)}
        </Tab.Navigator>
    </NavigationContainer>
   )
}