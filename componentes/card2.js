import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card2 = ({car}) => {
  return (
    <View style={styles.card}>
        <View style={styles.headercard}>
            <View>
                <Text style={styles.title}>{car}</Text>
                <Text style={styles.subtitle}>compacto</Text>
            </View>
            <Image source={require('../assets/heart.png')}></Image>
        </View>
        <View style={styles.center}>
            <Image source={require('../assets/MOBI.png')}></Image>
            <View style={styles.headercard2}>
            <View style={styles.headercard3}>
                <Image style={styles.image} source={require('../assets/gas-station.png')}></Image>
                <Text style={styles.subtitle}>80L</Text>
            </View>
            <View style={styles.headercard3}>
                <Image style={styles.image} source={require('../assets/Car.png')}></Image>
                <Text style={styles.subtitle}>Manual</Text>
            </View>
            <View style={styles.headercard3}>
                <Image style={styles.image} source={require('../assets/profile-2user.png')}></Image>
                <Text style={styles.subtitle}> 4 Pessoas</Text>
            </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: "white",
        height: 320,
        width: 400,
        borderRadius: 15,
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

    headercard2:{
        flex:0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 0,
    },
    headercard3:{
        flex:0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
       flex:1,
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'center',
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

export default Card2;
