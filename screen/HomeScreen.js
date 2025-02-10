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




const HomeScreen = () => {

  const route = useRoute();  // Acessando os parâmetros de navegação
  const { user } = route.params;  // Acessando os dados do usuário passados pela SplashScreen

  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');  // Limpa os dados do AsyncStorage
    await AsyncStorage.removeItem('token');  // Limpa o token
    navigation.replace('Login');  // Navega de volta para a tela de login
  };

  return (
    <ScrollView>

    <View style={styles.container}>
      <View>
        <Header/>
        <View style={styles.searchbar}>
          <Search />

          <TouchableOpacity style={styles.filterbutton} onPress={() => navigation.navigate('CheckIn')}>

          <Image source={require('../assets/filter.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.ads}>
          <View style={styles.containerad}>
          <Image source={require('../assets/ads.png')} style={styles.adimage}></Image>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.checks}>
          
          <View style={styles.containerbox}>
            <View style={styles.flexstart}>
              <Image source={require('../assets/Mark.png')}></Image>
              <Text>Check-in</Text>
            </View>
            
            <View style={styles.containeroptions}>
              <TouchableOpacity style={styles.buttonOptions}>
              <View style={styles.alignleft}>
                  <Text style={styles.title}>localização</Text>
                  <View style={styles.flexstart}>
                    <Text style={styles.subtitle}>selecione </Text>
                    <Image source={require('../assets/arrow-down.png')}></Image>
                  </View>
                </View>
                </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
              <View style={styles.alignleft}>
                  <Text style={styles.title}>Data</Text>
                  <View style={styles.flexstart}>
                    <Text style={styles.subtitle}>selecione </Text>
                    <Image source={require('../assets/arrow-down.png')}></Image>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
              <View style={styles.alignleft}>
                  <Text style={styles.title}>Horario</Text>
                  <View style={styles.flexstart}>
                    <Text style={styles.subtitle}>selecione </Text>
                    <Image source={require('../assets/arrow-down.png')}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerbox}>
            <View style={styles.flexstart}>
              <Image source={require('../assets/Mark.png')}></Image>
              <Text>Check-in</Text>
            </View>
              <View style={styles.containeroptions}>
              <TouchableOpacity style={styles.buttonOptions}>
              <View style={styles.alignleft}>
                  <Text style={styles.title}>localização</Text>
                  <View style={styles.flexstart}>
                    <Text style={styles.subtitle}>selecione </Text>
                    <Image source={require('../assets/arrow-down.png')}></Image>
                  </View>
                </View>
                </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
              <View style={styles.alignleft}>
                  <Text style={styles.title}>Data</Text>
                  <View style={styles.flexstart}>
                    <Text style={styles.subtitle}>selecione </Text>
                    <Image source={require('../assets/arrow-down.png')}></Image>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOptions}>
                <View style={styles.alignleft}>
                  <Text style={styles.title}>Horario</Text>
                  <View style={styles.flexstart}>
                    <Text style={styles.subtitle}>selecione </Text>
                    <Image source={require('../assets/arrow-down.png')}></Image>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
          </View>
          <TouchableOpacity style={styles.buttonBlue}>
            <Image source={require('../assets/Swap.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.div}>
          <Text style={styles.subtitle}>Carros Populares</Text>
          <TouchableOpacity><Text style={styles.link}>Veja Todos</Text></TouchableOpacity>
        </View>
        <View>
          <ScrollView style={styles.carousel}
          horizontal={true}>
            <Card
            car="Fiat Mobi"
            />
            <Card
            car="Fiat Argo"
            />
            <Card
            car="Fiat de brinquedo"
            />
          </ScrollView>
        </View>
        <View style={styles.div}>
        <Text style={styles.subtitle}> Carros Recomendados </Text>
          <TouchableOpacity><Text style={styles.link}>Veja Todos</Text></TouchableOpacity>

        </View>
        <View style={styles.center}>
          
            <Card2 car="Fiat Argo"/>
            <Card2 car="Fiat Argo"/>
            <Card2 car="Fiat Argo"/>

        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;