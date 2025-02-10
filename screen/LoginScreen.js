import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => { 
    axios.post('http://192.168.1.3:3000/login', { email, password })
      .then(async (response) => {
        const { token, user } = response.data;

        // Armazena o token e os dados do usuário no AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await AsyncStorage.setItem('token', token);

        // Passa os dados para a HomeScreen via navegação junto aos dados do usuário
        navigation.replace('Home', { user })
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          navigation.replace('Home', { user })
          alert('Erro ao tentar fazer o login. Por favor, tente novamente.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>
        Primeira vez aqui?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20 },
  button: { backgroundColor: '#4285F4', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
  registerText: { marginTop: 20, textAlign: 'center' },
  link: { color: '#4285F4', fontWeight: 'bold' },
});

export default LoginScreen;

