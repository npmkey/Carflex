import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      alert('Nome, e-mail e senha são obrigatórios!');
      return;
    }

    axios.post('http://192.168.1.3:3000/register', { name, email, password })
    .then(async (response) => {
      alert(response.data.message);
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Erro ao tentar realizar o registro. Por favor, tente novamente.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie Uma Nova Conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
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
  loginText: { marginTop: 20, textAlign: 'center' },
  link: { color: '#4285F4', fontWeight: 'bold' },
});

export default RegisterScreen;
