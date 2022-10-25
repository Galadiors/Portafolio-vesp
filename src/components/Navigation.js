import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '../screens/LoginScreen';
import MesaScreen from '../screens/MesaScreen';
/* import CanfirmarAccion from '../screens/CanfirmarAccion'; */

import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userInfo } = useContext(AuthContext);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {userInfo.token ? (
                    <>
                        <Stack.Screen name="MesaScreen" component={MesaScreen} />
                        {/* <Stack.Screen name="CanfirmarAccion" component={CanfirmarAccion} /> */}
                    </>) : (
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
