import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Alert} from 'react-native'



const Cadastro = ({navigation}) => {

exibirAlerta = () => {
  Alert.alert("RabbitBook","Cadastro Realizado")
}

return (

  <View style={styles.container}>
  
  <Text style={styles.header}> RabbitBook </Text>

    <TextInput style={styles.login1} 
    placeholder="Informe o seu Nome"
    autoCapitalize= "none"
  />

  <TextInput style={styles.login2} 
    placeholder="Informe o Email"
    keyboardAppearance= "email-address"
    autoCapitalize= "none"
    autoComplete= "email"
  />

  <TextInput style={styles.login2}
    placeholder="Informe a Senha"
    autoCapitalize= "none"
    secureTextEntry
  />

  <TouchableOpacity onPress={ () => {exibirAlerta ()}} style={styles.botao1} >
    <Text style={styles.botoes}>Cadastrar</Text>
  </TouchableOpacity>





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

})

export default Cadastro;