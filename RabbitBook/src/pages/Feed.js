import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, MD3Colors, Image, ScrollView,} from 'react-native';

const Feed = () => {
 
return (

  <ScrollView>

  <View style={styles.container}>
  
  <Text style={styles.header}> RabbitBook </Text>

  <TouchableOpacity onPress style={styles.botao1} >
  
    <Text style={styles.botoes}>Criar publicação</Text>

  </TouchableOpacity>

  <View style={styles.lado}>

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 40, width: 40,borderRadius: 75,}}/> 
    <Text style={styles.user}> Monique </Text>

   </View>

  <View style={styles.livro}>

      <Text style={styles.publi}>Estou vendendo o livro Querido Señor Henshaw da autora Beverly Cleary.</Text>
      <Image source={require('../Assets/Livro1.png')}
      style={{ width: "35%", height: 200, flexDirection: "row", }}/>  

  </View>

  <Text style={styles.curtida}>17 curtidas</Text>

  <View style={styles.botao2}>

    <TouchableOpacity onPress>
      <View style={styles.button}>
        <Image
          source={require('../Assets/like.png')}
          style={styles.like}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress>
      <View style={styles.button}>
        <Image
          source={require('../Assets/chat.png')}
          style={{ flexDirection: "row", height: 30, width: 36, marginLeft: 10,}}
        />
      </View>
    </TouchableOpacity> 

  </View>

  <View style={styles.lado}>

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 40, width: 40,borderRadius: 75,}}/> 
    <Text style={styles.user}> Luiz Roberto </Text>

  </View>

  <View style={styles.livro}>

      <Text style={styles.publi}>Estou vendendo o livro Conto de Fadas do renomado Stephen King.</Text>
      <Image source={require('../Assets/Livro2.png')}
      style={{ width: "35%", height: 200, flexDirection: "row", }}/>  
      
  </View>

  <Text style={styles.curtida}>21 curtidas</Text>

  <View style={styles.botao2}>

    <TouchableOpacity onPress>
      <View style={styles.button}>
        <Image
          source={require('../Assets/like.png')}
          style={styles.like}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress>
      <View style={styles.button}>
        <Image
          source={require('../Assets/chat.png')}
          style={{ flexDirection: "row", height: 30, width: 36, marginLeft: 10,}}
        />
      </View>
    </TouchableOpacity> 

  </View>

  <View style={styles.lado}>

    <Image source={require('../Assets/coelho2.png')}
      style={{ flexDirection: "row", height: 40, width: 40,borderRadius: 75,}}/> 
    <Text style={styles.user}> Claudio Luiz </Text>

  </View>

  <View style={styles.livro}>

      <Text style={styles.publi}>Vendo Dom Casmurro do autor Machado de Assis. Um dos maiores clássicos da literatura brasileira!</Text>
      <Image source={require('../Assets/Livro3.png')}
      style={{ width: "35%", height: 200, flexDirection: "row", }}/>  
      
  </View>  

  <Text style={styles.curtida}>10 curtidas</Text>

  <View style={styles.botao2}>

    <TouchableOpacity onPress>
      <View style={styles.button}>
        <Image
          source={require('../Assets/like.png')}
          style={styles.like}
        />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress>
      <View style={styles.button}>
        <Image
          source={require('../Assets/chat.png')}
          style={{ flexDirection: "row", height: 30, width: 36, marginLeft: 10,}}
        />
      </View>
    </TouchableOpacity> 

  </View>

  </View>

  </ScrollView>

);

}

const styles = StyleSheet.create({

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
  user: {
    color: "darkorange",
    textAlign: "left",
    alignContent: 'center',
    fontWeight:'bold',
  },
  publi: {
    color: "black",
    textAlign: 'left',
    padding: 10,
    backgroundColor: "#fef5da",
    width: "65%",
  },
  livro: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  lado: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  like: {
    height: 30,
    width: 36,
  },
  curtida: {
    color: "darkorange",
    fontWeight:'bold',
    marginBottom: 10,
    marginLeft: 2,
  },
  botao2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  }
})

export default Feed;