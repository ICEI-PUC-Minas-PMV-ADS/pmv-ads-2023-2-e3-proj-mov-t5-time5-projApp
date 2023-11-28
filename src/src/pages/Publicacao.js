import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, MD3Colors, Image, ScrollView,} from 'react-native';

const Publicacao = ({ navigation }) => {
 
return (
  
  <View style={styles.container}>

  <Text style={styles.header}> RabbitBook </Text>
  
  <View style={styles.user}>
  
    <Image source={require('../img/foto.png')}
      style={{ flexDirection: "row", height: 65, width: 65}}/> 
    <Text style={styles.nameuser}>  Ana Lívia </Text>
  
  </View>

  <TextInput style={styles.conteudo} 
    placeholder="Escrever uma publicação..."
  />

  <TouchableOpacity style={styles.botao1} >
  
    <Text style={styles.botoes}>Publicar</Text>

  </TouchableOpacity>
  



  </View>

);

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#392620",
    justifyContent: "center"
  },
  user: {
    flexDirection: 'row',
    marginLeft: 3,
    marginBottom: 15,
    alignItems: 'center',
    color: "darkorange",
    fontWeight:'bold',
    fontSize: "20px"
  },
  nameuser: {
    flexDirection: 'row',
    alignItems: 'center',
    color: "darkorange",
    fontWeight:'bold',
    fontSize: "20px"
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    color: "darkorange",
    marginBottom: 40,
    marginTop: 30,
  },
  conteudo: {
    width: '80%',
    height: 500,
    margin: 10,
    fontSize: 15,
    marginTop: 10,
    color: "#fef5da",
    textAlign: "top" ,
  },
  botoes: {
    fontSize: 15,
    color: "darkorange",
    textAlign: "center",
    fontWeight:'bold',
  },
  botao1: {
    backgroundColor: "#fef5da",
    color: "darkorange",
    width: '100%',
    padding: 10,
    marginBottom: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
})

export default Publicacao;