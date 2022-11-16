import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageUpload from './uploadPost/uploadImage';
import UploadText from './uploadPost/uploadText';



const Post = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{backgroundColor:'#97D2EC', flex: 1}}>
            <Tab.Navigator>
            <Tab.Screen name="Text Upload" component={UploadText} />
            <Tab.Screen name="Image Upload" component={ImageUpload} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};
export default Post;

