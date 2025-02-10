import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Header = () => {
    const route = useRoute();  // Acessando os parâmetros de navegação  
    const navigation = useNavigation();

  return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.logob}>
                <Text style={styles.logo}>CarFlex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/perfil.png')} style={styles.icon}></Image>
            </TouchableOpacity>
        </View>
  )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F9',
        justifyContent: 'space-between',
      },
    
      carousel:{
        margin:15,
    
      },
    
      div:{
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 48,
        marginBottom: 0,
        marginTop: 10,
      },
    
      checks:{
        alignItems: 'center',
        flex: 0,
        height: 430,
        marginBottom: 20,
        gap: 20,
      },
      containerbox:{
        backgroundColor:'white',
        flex: 0 ,
        marginLeft:40,
        marginRight:40,
        borderRadius: 10,
        padding:15,
        margin:15,
      },
      containeroptions:{
        backgroundColor: 'white',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      buttonOptions:{
        backgroundColor: 'white',
        height: 100,
        width: 120,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
      },
      buttonBlue:{
        backgroundColor: '#3563E9',
        height: 80,
        width: 80,
        borderRadius: 10,
        bottom: 275,
        alignItems: 'center',
        justifyContent: 'center',
      },
      header:{
        paddingHorizontal: 48,
        paddingVertical: 20,
        paddingTop: 60,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      header2:{
        padding: 40,
        paddingTop: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
      },
      header3:{
        padding: 40,
        paddingTop: 0,
        alignItems: 'center',
      },
    
      space:{
        marginRight: 10,
      },
    
      logo: {
        color: '#3563E9',
        fontSize: 24,
        fontWeight: 'bold',
      },
      logob:{
        width: 90,
        height: 50,
      },
    
      ads:{
        height: 220,
        width: 400,
        objectFit: 'fill',
      },
    
      circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#C3D4E9',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 15,
      },
    
      subtitle:{
        color: '#90A3BF',
        fontSize: 14, 
      },
    
      link:{
        color: "blue",
      },
      
      text: {
        color: '#596780',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
      },
      topMenuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 0,
        paddingHorizontal: 10,
      },
      menuButton: {
        alignItems: 'center',
      },
    
      filterbutton:{
        height: 54,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#C3D4E9',
        marginLeft: 20,
      },
    
      icon: {
        width: 30,
        height: 30,
        borderRadius: 25,
        overflow: 'hidden',
      },
      menuText: {
        fontSize: 12,
        color: 'white',
      },
      animationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      animation: {
        width: 500,
        height: 400,
      },
    
      flexstart:{
        flex:0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
        alignItems: 'center',
        gap: 10,
      },
});
export default Header;