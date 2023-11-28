import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UsuarioService from '../Services/UsuarioService'

const Login = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('cadastro');
  };

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const usuario = new UsuarioService();

  const logar = async (usuarioService) => {
    if (!email || !senha) {

      setErrorMessage("Preencha todos os dados")
      setIsVisible(true)

    } else {

      setIsVisible(false)
      const usuarioExiste = await usuarioService.Exist(email, senha)

      if (usuarioExiste) {
        
        try {
          await AsyncStorage.setItem('usuarioData', JSON.stringify(usuarioExiste[0]));
        } catch (error) {
          console.error('Erro ao salvar no AsyncStorage:', error);
        }

        navigation.navigate('home');

      } else {

        setErrorMessage("E-mail ou senha incorretos")
        setIsVisible(true)

      }
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.header}> RabbitBook </Text>

      <TextInput style={styles.login1}
        placeholder="Informe o Email"
        keyboardAppearance="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput style={styles.login2}
        placeholder="Informe a Senha"
        autoCapitalize="none"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity onPress={() => logar(usuario)} style={styles.botao1} >
        <Text style={styles.botoes}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={handlePress} style={styles.botao2} >
        <Text style={styles.botoes}>Criar Nova Conta</Text>
      </TouchableOpacity>

      {isVisible && <Text style={styles.span}>{errorMessage}</Text>}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#2C2C2C",
    justifyContent: "center"
  },
  header: {
    fontSize: 30,
    color: "#1154FF",
    marginBottom: 160,
  },
  botoes: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  login1: {
    borderColor: "#1154FF",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 20,
    fontSize: 25,
    marginTop: 50,
    textAlign: "center",
    color: "#9D9D9D",
    fontSize: 15,
  },
  login2: {
    borderColor: "#1154FF",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 20,
    fontSize: 25,
    textAlign: "center",
    color: "#9D9D9D",
    fontSize: 15,
  },
  botao1: {
    backgroundColor: "#1154FF",
    width: '80%',
    padding: 10,
    margin: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  botao2: {
    backgroundColor: "#1154FF",
    width: '80%',
    padding: 10,
    marginTop: 100,
    borderRadius: 30,
    alignItems: 'center',
  },
  span: {
    display: 'flex',
    fontSize: 15,
    color: '#FF0000',
  }
})

export default Login;
