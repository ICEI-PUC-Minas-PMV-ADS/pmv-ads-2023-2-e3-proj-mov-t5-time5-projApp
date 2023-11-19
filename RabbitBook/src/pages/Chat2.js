import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, MD3Colors, Image, ScrollView,} from 'react-native';

const Chat2 = () => {
 
return (

  <View style={styles.container}>
  
  <View style={styles.header}>

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 40, width: 40, borderRadius: 75,}}/>
    <Text style={styles.username}> Monique</Text>
    <Text style={styles.descricao}>{'\n'}Online há 1 hora</Text>

  </View>

  <Text style={styles.mandar}>Boa noite, tranquilo? {'\n'} Vi que anunciou Querido Señor Henshaw e gostaria de saber o valor.</Text>

  <Text style={styles.receber}>Oi, tudo bem sim</Text>

  <Text style={styles.receber}>Estou pedindo 50 reais por ele</Text>

  <Text style={styles.mandar}>Podemos negociar uma troca?</Text>

  <Text style={styles.receber}>O que você teria para oferecer?</Text>

  <TextInput style={styles.enviar} 
    placeholder="  Mensagem..."
  />
 
  </View>

);

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#392620",
    justifyContent: "center"
  },
    header: {
    color: "darkorange",
    width: '100%',
    marginTop: 50,
    height: 70,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    marginLeft: 10,
  },
    username: {
    fontSize: 15,
    color: "darkorange",
    textAlign: "center",
    fontWeight:'bold',
    marginBottom: 1,
  },
    descricao: {
      fontSize: 11,
      color: "grey",
      textAlign: 'left',
    },
    enviar: {
    width: '95%',
    fontWeight:'bold',
    marginLeft: 9,
    height: 40,
    fontSize: 15,
    marginTop: 100,
    color: "darkorange",
    backgroundColor: '#fef5da',
    borderRadius: 75,
    position: 'absolute',
    bottom: 20, 
  },
  receber: {
    backgroundColor: "darkorange",
    color: "#fef5da",
    borderRadius: 75,
    padding: 10,
    width: "50%",
    marginBottom: 30,
    textAlign: "center",
  },
    mandar: {
    backgroundColor: "#fef5da",
    color: "darkorange",
    borderRadius: 75,
    padding: 10,
    width: "50%",
    alignItems: "flex-end",
    marginBottom: 30,
    marginLeft: "50%",
    textAlign: "center",
  }
})

export default Chat2;