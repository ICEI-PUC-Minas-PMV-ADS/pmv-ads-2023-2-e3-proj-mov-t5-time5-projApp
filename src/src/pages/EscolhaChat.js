import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, MD3Colors, Image, ScrollView,} from 'react-native';

const EscolhaChat = () => {
 
return (

  <ScrollView style={styles.scroll}>

  <View style={styles.container}>
  
  <Text style={styles.header}> RabbitBook </Text>

  <TextInput style={styles.pesquisa} 
    placeholder="Pesquisar"
  />

  <View style={styles.chat}>

  <TouchableOpacity onPress style={styles.lado} >

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75,}}/>
    <Text style={styles.username}>Claudio Luiz</Text>
    <Text style={styles.descricao}>{'\n'}Online há 3 horas</Text>

  </TouchableOpacity>

  </View>


  <View style={styles.chat}>

  <TouchableOpacity onPress style={styles.lado} >

    <Image source={require('../Assets/coelho3.png')}
      style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75,}}/>
    <Text style={styles.username}>Fãs J.K Rowling</Text>
    <Text style={styles.descricao}>{'\n'}11 membros</Text>

  </TouchableOpacity>

  </View>

  <View style={styles.chat}>

  <TouchableOpacity onPress style={styles.lado} >

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75,}}/>
    <Text style={styles.username}>Monique</Text>
    <Text style={styles.descricao}>{'\n'}Online há 1 hora</Text>

  </TouchableOpacity>

  </View>

  <View style={styles.chat}>

  <TouchableOpacity onPress style={styles.lado} >

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75,}}/>
    <Text style={styles.username}>Luiz Roberto</Text>
    <Text style={styles.descricao}>{'\n'}Online há 10 horas</Text>

  </TouchableOpacity>

  </View>

  <View style={styles.chat}>

  <TouchableOpacity onPress style={styles.lado} >

    <Image source={require('../Assets/coelho3.png')}
      style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75,}}/>
    <Text style={styles.username}>GOT</Text>
    <Text style={styles.descricao}>{'\n'}23 membros</Text>

  </TouchableOpacity>

  </View>

  </View>

  </ScrollView>

  

);

}

const styles = StyleSheet.create({


  scroll: {
    backgroundColor: "#392620",
  },
  container: {
    flex: 1,
    backgroundColor: "#392620",
    justifyContent: "center"
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    color: "darkorange",
    marginBottom: 10,
    marginTop: 30,
  },
    pesquisa: {
    width: '90%',
    fontWeight:'bold',
    marginLeft: 15,
    height: 30,
    fontSize: 15,
    marginTop: 10,
    color: "darkorange",
    backgroundColor: '#fef5da',
    textAlign: "center" ,
    borderRadius: 75,
  },
    chat: {
    backgroundColor: "#fef5da",
    color: "darkorange",
    width: '100%',
    marginTop: 50,
    height: 70,
    flexDirection: 'row',
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
    lado: {
      flexDirection: 'row',
    }
})

export default EscolhaChat;