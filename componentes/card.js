import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card = ({car}) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <View style={styles.headercard}>
            <View>
                <Text style={styles.title}>{car}</Text>
                <Text style={styles.subtitle}>compacto</Text>
            </View>
            <Image source={require('../assets/heart.png')}></Image>
        </View>
        <View style={styles.center}>
            <Image source={require('../assets/MOBI.png')}></Image>
        </View>
        <View style={styles.headercard}>
            <View style={styles.headercard}>
                <Image style={styles.image} source={require('../assets/gas-station.png')}></Image>
                <Text style={styles.subtitle}>80L</Text>
            </View>
            <View style={styles.headercard}>
                <Image style={styles.image} source={require('../assets/Car.png')}></Image>
                <Text style={styles.subtitle}>Manual</Text>
            </View>
            <View style={styles.headercard}>
                <Image style={styles.image} source={require('../assets/profile-2user.png')}></Image>
                <Text style={styles.subtitle}> 4 Pessoas</Text>
            </View>
        </View>
        <View style={styles.headercard}>
            <View>
                <Text style={styles.title}>R$ 85,90</Text>
                <Text style={styles.subtitle}>/dia</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}> Alugue Agora</Text></TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: "white",
        height: 360,
        width: 250,
        borderRadius: 15,
        margin: 15,
        padding:20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    headercard:{
        flex:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    title:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    subtitle:{
        color: '#90A3BF',
        fontSize: 12, 
    },

    image:{
        alignItems: 'center',
        height: 15,
        width: 15,
    },

    center:{
        alignItems: 'center'
    },

    button:{
        backgroundColor: "#3563E9",
        padding: 10,
        borderRadius: 10,
    },

    buttontext:{
        color: "white",
    },
})

export default Card;
