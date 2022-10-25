import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { ScrollView } from 'react-native';
import { COLOURS, } from '../database/Database';

const LoginScreen = ({ navigation }) => {

    const [username, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { isLoanding, login } = useContext(AuthContext);
    
    return (
        <ImageBackground source={require('../assets/restaurant.jpg')} style={{
            height: "100%",
            width: "100%",
            resizeMode: 'cover',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Spinner visible={isLoanding} />
            <StatusBar
                backgroundColor={COLOURS.backgroundLight}
                barStyle="dark-content"
            />
            <View style={{
                width: '90%',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <ScrollView>
                    <View style={{
                        width: 290,
                        height: 290,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10
                    }}>
                        <Image source={require('../assets/LOGOPRO.png')} style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }} />
                    </View>
                    <View style={{
                        width: 300,
                        height: 300
                    }}>
                        <TextInput
                            style={styles.input}
                            value={username}
                            placeholder="Enter your Email"
                            onChangeText={text => setEmail(text)}
                        />

                        <TextInput
                            style={styles.input}
                            value={password}
                            placeholder="Enter your Password"
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />

                        <Button
                            title="Login"
                            onPress={() => {
                                login(username, password);

                            }}
                        />
                    </View>
                </ScrollView>
            </View>

        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    formContainer: {
        width: '90%',
        height: '80%'
    },
    image: {
        height: '100%',
        width: '80%',
        resizeMethod: 'scale'
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 7,
        paddingHorizontal: 14,
        backgroundColor: '#F5F3F8'
    },
});
export default LoginScreen