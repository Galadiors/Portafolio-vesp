import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import { getMesas, /* putMesa */ } from '../../api';
import { COLOURS, } from '../database/Database';
import { AuthContext } from '../context/AuthContext';

import axios from 'axios';

import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MesaScreen = ({ navigation, route }) => {

    const [mesas, setMesas] = useState([]);
    const [mconfi, setConfi] = useState([]);

    const { isLoanding, logout } = useContext(AuthContext);

    const cargarMesas = async () => {
        const data = await getMesas();
        setMesas(data);
    }

    useEffect(() => {
        cargarMesas();
    }, []);

    const putMesa = async (id) => {
        await axios.put(`https://siglo-xxi-tables.azurewebsites.net/Tables/v1/tables/` + id + `/change-status`)
            .then(res => {
                const confirmacion = res.data;
                return confirmacion;
            })

    }

    const changeMesa = async (id) => {
        const confi = await putMesa(id);
        ToastAndroid.show(
            'Acción realizada con exito',
            ToastAndroid.SHORT,
        )
        await cargarMesas();
        //navigation.navigate('CanfirmarAccion', { confi });
    }


    const mesa = (mesas.tables);
    return (
        <ImageBackground source={require('../assets/restaurant.jpg')} style={{
            height: "100%",
            width: "100%",
            resizeMethod: 'scale',
            resizeMode: 'cover',
        }}>
            <StatusBar
                backgroundColor={COLOURS.backgroundLight}
                barStyle="dark-content"
            />
            <View>
                <ScrollView>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                    }}>
                        <TouchableOpacity onPress={logout()}>
                            <SimpleLineIcons
                                name="logout"
                                style={{
                                    fontSize: 18,
                                    color: '#F5F3F8',
                                    padding: 12,
                                    backgroundColor: '#F5571F',
                                    borderRadius: 10,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginBottom: 10,
                        padding: 16,
                        width: '85%'
                    }}>
                        <Text
                            style={{
                                fontSize: 26,
                                color: '#F5F3F8',
                                fontWeight: '500',
                                letterSpacing: 1,
                                marginBottom: 10,
                            }}>
                            Selección de mesa
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: 5
                    }}>
                        <FlatList
                            data={mesa}
                            keyExtractor={(item) => item.id + ''}
                            renderItem={({ item }) => {
                                let estado = item.status.code;
                                if (estado < 4) {
                                    return (
                                        <View style={{
                                            height: 120,
                                            width: 350,
                                            borderWidth: 3,
                                            borderColor: '#ffffff',
                                            marginVertical: 8,
                                            backgroundColor: '#F5571F'
                                        }}>
                                            <TouchableOpacity
                                                style={{
                                                    textAlign: 'center',
                                                    padding: 5,
                                                    alignItems: 'center',
                                                    alignContent: 'center',
                                                    justifyContent: 'center',
                                                    margin: 5

                                                }}
                                                onPress={() => { changeMesa(item.id) }}>
                                                <MaterialCommunityIcons
                                                    name="table-furniture"
                                                    style={{
                                                        fontSize: 50,
                                                        color: '#F5F3F8',
                                                        padding: 5
                                                    }}
                                                />
                                                <Text style={{
                                                    fontSize: 25,
                                                    fontFamily: 'sans-serif-thin',
                                                    fontWeight: '400',
                                                    color: '#F5F3F8',
                                                    margin: 5
                                                }}>{item.number} {item.status.name}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                    )
                                } else { null }

                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground >
    )
}

export default MesaScreen