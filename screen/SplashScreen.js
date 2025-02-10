import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      // Verifica se o usuário está autenticado
      const user = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');

      // Delay de 2 segundos da splash screen
      setTimeout(() => {
        if (user && token) {
          // Se o usuário e o token existirem no AsyncStorage (usuário autenticado), passa para a tela Home
          navigation.replace('Home', { user: JSON.parse(user) });
        } else {
          // Se não houver dados no AsyncStorage, vai para a tela de Login
          navigation.replace('Login');
        }
      }, 2000);
    };

    checkLoginStatus();

  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Image
        source={{ uri: 'https://carflexplus.com/wp-content/uploads/2024/05/cropped-logo-e1717084055186.png' }}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'purple',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
