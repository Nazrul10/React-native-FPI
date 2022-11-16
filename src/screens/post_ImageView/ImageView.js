import { getDownloadURL, listAll, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import ImageModal from 'react-native-image-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storage } from '../login';

const ImageView = () => {
    const [imageList, setImageList] = useState([])
    const [loading, setLoading] = useState(false)
    const imageListRef = ref(storage, "/FPI-NOTICES")
    // console.log(imageList, 'imagess')

    const renderImage = ({item}) =>{
        let URL ={ uri: item};
        // console.log(URL, "NEw")
        return<ImageModal
        resizeMode="contain"
        imageBackgroundColor="#97D2EC"
        style={{
          width: 380,
          height: 650,
        }}
        source={URL}
      />
    }
    //image show
    useEffect(()=>{
        setLoading(true)
        listAll(imageListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev, url])
                    setLoading(false)
                })
            })
        })
    },[])

    return (
        <SafeAreaView style={{backgroundColor:'#97D2EC', flex: 1}}>
            {loading ? <ActivityIndicator color="blue" size="large"/>  :<View style={styles.textContainer}>
                <FlatList data={imageList} renderItem={renderImage} keyExtractor={(image) => image} />
            </View>}

        </SafeAreaView>
    );
};

export default ImageView;

const styles = StyleSheet.create({
    title:{
        padding: 10,
        backgroundColor: "#25316D",
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 14,
        color: "#fff",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

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
    }
})