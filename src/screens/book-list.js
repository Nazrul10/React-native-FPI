import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Arche22 from './bookList/aidt22';
import Civil22 from './bookList/civil22';
import Compo22 from './bookList/compo22';
import Electro22 from './bookList/electro22';
import Macha22 from './bookList/macha22';
import Power22 from './bookList/power22';

const Books = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{backgroundColor:'#97D2EC', flex: 1}}>
        <Tab.Navigator>
        <Tab.Screen name="CMT" component={Compo22} />
        <Tab.Screen name="ET" component={Electro22} />
        <Tab.Screen name="Civil" component={Civil22} />
        <Tab.Screen name="MT" component={Macha22} />
        <Tab.Screen name="PT" component={Power22} />
        <Tab.Screen name="AIDT" component={Arche22} />
        </Tab.Navigator>
    </SafeAreaView>
    );
};

export default Books;