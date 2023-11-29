import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import UsuarioService from '../Services/UsuarioService';
import BibliotecaService from '../Services/BibliotecaService';


const Cadastro = ({ navigation }) => {

  const handlePress = () => {
    navigation.navigate('login');
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const usuario = new UsuarioService();
  const biblioteca = new BibliotecaService();

  const cadastrar = async (usuarioService, bibliotecaService) => {
    if (!nome || !email || !senha) {
      setErrorMessage('É necessário preencher todos os dados');
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
      const usuarioExiste = await usuarioService.Exist(email);
      if (usuarioExiste.length > 0) {
        setErrorMessage('Usuário já cadastrado');
        console.log(usuarioExiste)
        setIsVisible(true);
      }
      else {
        setIsVisible(false);
        const novoUsuario = usuarioService.Post({
          "nome": nome,
          "email": email,
          "senha": senha
        })
        bibliotecaService.Post({
          "usuarioId": novoUsuario.id,
          "livros": []
        })

        navigation.navigate('home');
      }
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.header}> RabbitBook </Text>

      <TextInput
        style={styles.login1}
        placeholder="Informe o seu Nome"
        autoCapitalize="none"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.login2}
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

      <Pressable onPress={() => cadastrar(usuario, biblioteca)} style={styles.botao1} >
        <Text style={styles.botoes}>Cadastrar</Text>
      </Pressable>

      <Pressable onPress={handlePress}>
        <Text style={styles.text}>Já possuo cadastro</Text>
      </Pressable>

      {isVisible && <Text style={styles.span}>{errorMessage}</Text>}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#392620",
    justifyContent: "center"
  },
  header: {
    fontSize: 30,
    color: "darkorange",
    marginBottom: 160,
  },
  botoes: {
    fontSize: 15,
    color: "darkorange",
    textAlign: "center",
  },
  login1: {
    borderColor: "#fef5da",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 20,
    fontSize: 25,
    marginTop: 50,
    textAlign: "center",
    color: "darkorange",
    fontSize: 15,
  },
  login2: {
    borderColor: "#fef5da",
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 20,
    fontSize: 25,
    textAlign: "center",
    color: "darkorange",
    fontSize: 15,
  },
  botao1: {
    backgroundColor: "#fef5da",
    width: '80%',
    padding: 10,
    margin: 30,
    borderRadius: 30,
    alignItems: 'center',
  },

})

export default Cadastro;
