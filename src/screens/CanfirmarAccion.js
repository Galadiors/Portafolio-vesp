import { FlatList, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar } from 'react-native';
import { COLOURS, } from '../database/Database';
import React from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CanfirmarAccion = ({ navigation, route }) => {
  const { confi } = route.params;
  console.log(confi);
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
            <TouchableOpacity onPress={() => navigation.navigate('MesaScreen')}>
              <Entypo
                name="chevron-left"
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 5
          }}>
            <Text style={{
              fontSize: 26,
              color: '#F5F3F8',
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>{confi}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground >
  )
}

export default CanfirmarAccion