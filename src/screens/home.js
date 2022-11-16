import React from 'react';
import { Linking, Pressable, ScrollView, View } from 'react-native';

import { ImageSlider } from "react-native-image-slider-banner";
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '../components/text/Text';
import { colors } from '../theme/color';



const Home = () => {
    const nameClick = ()=>{
        Linking.openURL('https://www.facebook.com/nazrul.com10')
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor: colors.white}}>
           <ScrollView>
           <ImageSlider 
            data={[
            {img: require('../../assets/fpi1.jpg')},
            {img: require('../../assets/fpi2.jpg')},
            {img:require('../../assets/fpi3.jpg')},
            {img: require('../../assets/fpi4.jpg')},
            {img: require('../../assets/fpi5.jpg')},
            {img:require('../../assets/fpi6.jpg')}
            ]}
            showHeader
            headerCenterComponent={<Text style={{fontSize: 23, color: '#fff'}}>Feni Polytechnic Institute</Text>}
             headerStyle={{padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)',}}
                autoPlay={true}
                closeIconColor='#fff'
                localImg={true}
            />
           <View style={{backgroundColor: colors.darkGrey}}>
                <Text style={{ textAlign: 'center', color:'#fff', fontSize: 20}}>
                History of Feni Polytechnic Institute
                </Text>
                <View style={{backgroundColor: colors.white}}>
                    <Text style={{ color: colors.black, padding: 8, textAlign: 'center', textAlign:'justify'}}>
                    In 29th February 1964, Feni Polytechnic started its journey as Feni Technical with Civil and Mechanical Engineering departments in a 15.97 Acre campus near old Dhaka-Chittagong Highway road, just 500 meters east to Feni Sadar Hospital. In 1972 with the addition of Power department, the institution finally became Feni Polytechnic Institute. Later additional departments as Electrical engineering (1978), Computer engineering (2002), Architecture & Interior design technology (2006) was added to give the institution its present form.

From its very first day, Feni polytechnic has been under supervision of excellent administration lead by many highlighted individuals from Technical Education field. Currently the institution is run by 60 teachers lead by the Principal, 50 third grade and 26 fourth grade government staffs. Today, Feni Polytechnic Institute operates an additional second shift to its usual operation for its 6 departments and the institution is hence filled with students all through the operating period and comes to life from morning till evening.

Today Feni Polytechnic has a magnificent campus consisting of a two floor administrative building, 1 three floor academic building, 3 campus accommodations for its students, auditorium, mosque and accommodations for its Principal and staffs. The pond, field, canteen and the various trees all around the campus simply is a treat for our eyes.

Feni Polytechnic Institute is highly regulated and monitored by the Directorate of Technical Education(DTE) under Ministry of Education(MoE) for the Governments of the people\'s republic of Bangladesh. The academic section is supervised by the Bangladesh Technical Education Board (BTEB).
                    </Text>
                        <Pressable onPress={nameClick}>
                            <Text style={{textAlign: 'center', color:'blue'}}>
                                Design By Nazrul Islam
                            </Text>
                            <Text style={{textAlign: 'center', marginBottom: 12}}>
                                 CMT 18-19
                            </Text>
                            <Text style={{textAlign: 'center', color: 'gray'}}>
                            version: 1.0.0
                            </Text>
                        </Pressable>
                </View>
            </View>
           </ScrollView>
        </SafeAreaView>
    );
};

export default Home;