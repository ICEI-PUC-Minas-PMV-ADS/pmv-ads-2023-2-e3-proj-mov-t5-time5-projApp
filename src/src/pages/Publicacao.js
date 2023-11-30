import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, MD3Colors, Image, ScrollView, } from 'react-native';

const Publicacao = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.header}> RabbitBook </Text>
      </View>

      <View style={styles.user}>

        <Image source={require('../img/foto.png')}
          style={{ flexDirection: "row", height: 75, width: 75 }} />
        <Text style={styles.nameuser}>  Ana Lívia </Text>

      </View>
      <View style={styles.pageContent}>
        <TextInput style={styles.conteudo}
          placeholder="Escrever uma publicação..."
        />

        <TouchableOpacity style={styles.botao1} >

          <Text style={styles.botoes}>Publicar</Text>

        </TouchableOpacity>
      </View>
    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center"
  },
  cabecalho: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#392620',
    height: 100,
  },
  pageContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: "black",
    fontWeight: 'bold',
    fontSize: "20px",
    height: 85,
    backgroundColor: 'rgba(139, 69, 19, 0.5)',
    paddingVertical: 5,
    paddingLeft: 5,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderTopColor: '#fef5da',
    borderTopWidth: 2
  },
  nameuser: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: "black",
    fontWeight: 'bold',
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
    height: 400,
    marginVertical: 20,
    fontSize: 15,
    color: "#5F5C5D",
    textAlign: "top",
    borderRadius: 5,
    borderColor: "#fef5da",
    borderWidth: 1,
    backgroundColor: 'white'
  },
  botoes: {
    fontSize: 15,
    color: "darkorange",
    textAlign: "center",
    fontWeight: 'bold',
  },
  botao1: {
    backgroundColor: "#fef5da",
    color: "black",
    width: '80%',
    padding: 10,
    marginBottom: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
})

export default Publicacao;