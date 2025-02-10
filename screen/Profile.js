import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import Card from '../componentes/card';
import Card2 from '../componentes/card2';
import Search from '../componentes/search';
import Header from '../componentes/header';
import styles from '../assets/styles'




const Profile = () => {

    const route = useRoute();  // Acessando os parâmetros de navegação
    const navigation = useNavigation();

    return(
        <ScrollView>
            <View style={styles.screen}>
                <Header style={styles.div}></Header>
                <View style={styles.center}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterVehicle')}>
                        <Text style={styles.buttontext}>Cadastrar Veículo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Vehicles')}>
                        <Text style={styles.buttontext}>VehiclesScreen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CheckIn')}>
                        <Text style={styles.buttontext}>Checkin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
                        <Text style={styles.buttontext}>VerificationCNH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filter')}>
                        <Text style={styles.buttontext}>Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UsedVehicles')}>
                        <Text style={styles.buttontext}>UsedVehicles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hotels')}>
                        <Text style={styles.buttontext}>Hotels</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}> Ajuda </Text>
            </View>
        </ScrollView>
    )
}


export default Profile;