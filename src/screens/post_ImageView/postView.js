import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from "../login";

const dBase = db;
const PostView = () => {
    const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const q = query(collection(dBase, "posts"), where("id", "==", "123456"));
        const postListainerSubscriber = onSnapshot(q, (QuerySnapshot)=>{
            const list = [];
            
            QuerySnapshot.forEach((doc)=>{
                list.push(doc.data())
            });
            setPost(list)
            setLoading(false)
        })
            return postListainerSubscriber;
            
    },[])
    const renderItem = ({item}) =>{
        const {title, description, date} = item
        return(  
                <Pressable >
                <View>
                <Text style={styles.date}>
                Date: {date}
                </Text>
                <Text style={styles.title}>
                    Title: {title}
                </Text>
                <Text style={styles.desc}>
               # {description}
                </Text>
                </View>
            </Pressable>   
        )
    }

    return (
        <SafeAreaView style={{backgroundColor:'#97D2EC', flex: 1}}>
            {loading ? <ActivityIndicator color="blue" size="large"/>  :<View style={styles.textContainer}>
                <FlatList data={post} renderItem={renderItem} keyExtractor={(item) => item.date} />
            </View>}
        </SafeAreaView>
    );
};

export default PostView;

const styles = StyleSheet.create({
    title:{
        padding: 5,
        backgroundColor: "#25316D",
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 14,
        color: "#fff",

    },
    desc:{
        backgroundColor: "#5F6F94",
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 14,
        color: "#fff",
        padding: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 10,
        marginBottom: 10
    },
    textContainer:{
       marginVertical:10
    },
    date:{
        padding: 5,
        backgroundColor: "#25316D",
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 14,
        color: "#fff",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    }
})