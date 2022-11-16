import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageView from './post_ImageView/ImageView';
import PostView from './post_ImageView/postView';


const Notices = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{backgroundColor:'#97D2EC', flex: 1}}>
            <Tab.Navigator>
            <Tab.Screen name="All Post" component={PostView} />
            <Tab.Screen name="Images" component={ImageView} />
            </Tab.Navigator>
        </SafeAreaView>
    );
};
export default Notices;

