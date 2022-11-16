import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AidtTeachers from './aidt-teacher';
import CivilTeachers from './civil-teacher';
import CmtTeachers from './cmt-teacher';
import EtTeachers from './et-teacher';
import mtTeachers from './mt-teacher';
import ptTeachers from './pt-teacher';

const Teachers = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{backgroundColor:'#97D2EC', flex: 1}}>
        <Tab.Navigator>
        <Tab.Screen name="CMT" component={CmtTeachers} />
        <Tab.Screen name="ET" component={EtTeachers} />
        <Tab.Screen name="Civil" component={CivilTeachers} />
        <Tab.Screen name="MT" component={mtTeachers} />
        <Tab.Screen name="PT" component={ptTeachers} />
        <Tab.Screen name="AIDT" component={AidtTeachers} />
        </Tab.Navigator>
    </SafeAreaView>
    );
};

export default Teachers;