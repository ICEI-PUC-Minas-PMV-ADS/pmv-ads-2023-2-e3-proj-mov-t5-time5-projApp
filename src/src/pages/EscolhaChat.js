import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, MD3Colors, Image, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const EscolhaChat = ({ navigation }) => {

  const goToChat = () => {
    navigation.navigate('chat1');
  }

  const goToChat2 = () => {
    navigation.navigate('chat2');
  }

  const goToChat3 = () => {
    navigation.navigate('chat3');
  }

  const goToGroup2 = () => {
    navigation.navigate('grupo2');
  }

  return (

    <ScrollView style={styles.scroll}>

      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Text style={styles.header}> RabbitBook </Text>
          <View style={styles.cabecalhoBottom}>
            <Pressable onPress={goToGroup2}>
                <Icon name='pluscircleo' style={styles.iconLivr} />
            </Pressable>
            <View style={styles.inputContainer}>
              <Icon name="search1" size={20} color="#808080" style={styles.icon} />
              <TextInput
                style={styles.pesquisa}
                placeholder="Pesquisar"
                borderWidth={0}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
        </View>

        <View style={styles.pageContent}>
          <View style={styles.chat}>

            <TouchableOpacity onPress={goToChat} style={styles.lado} >

              <Image source={require('../Assets/coelho2.png')}
                style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75, }} />
              <View style={styles.chatRight}>
                <Text style={styles.username}>Claudio Luiz</Text>
                <Text style={styles.descricao}>{'\n'}Online há 3 horas</Text>
              </View>

            </TouchableOpacity>

          </View>


          <View style={styles.chat}>

            <TouchableOpacity onPress style={styles.lado} >

              <Image source={require('../Assets/coelho3.png')}
                style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75, }} />
              <View style={styles.chatRight}>
                <Text style={styles.username}>Fãs J.K Rowling</Text>
                <Text style={styles.descricao}>{'\n'}11 membros</Text>
              </View>

            </TouchableOpacity>

          </View>

          <View style={styles.chat}>

            <TouchableOpacity onPress={goToChat2} style={styles.lado} >

              <Image source={require('../Assets/coelho2.png')}
                style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75 }} />
              <View style={styles.chatRight}>
                <Text style={styles.username}>Monique</Text>
                <Text style={styles.descricao}>{'\n'}Online há 1 hora</Text>
              </View>

            </TouchableOpacity>

          </View>

          <View style={styles.chat}>

            <TouchableOpacity onPress={goToChat3} style={styles.lado} >

              <Image source={require('../Assets/coelho2.png')}
                style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75, }} />
              <View style={styles.chatRight}>
                <Text style={styles.username}>Luiz Roberto</Text>
                <Text style={styles.descricao}>{'\n'}Online há 10 horas</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.chat}>

            <TouchableOpacity onPress style={styles.lado} >

              <Image source={require('../Assets/coelho3.png')}
                style={{ flexDirection: "row", height: 70, width: 70, borderRadius: 75, }} />
              <View style={styles.chatRight}>
                <Text style={styles.username}>GOT</Text>
                <Text style={styles.descricao}>{'\n'}23 membros</Text>
              </View>
            </TouchableOpacity>

          </View>
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
    justifyContent: "center",
    backgroundColor: '#CFCFCF',
  },
  iconLivr: {
    height: 30,
    width: 30,
    marginTop: 10,
    color: 'darkorange',
    fontWeight: 'bold',
    fontSize: '100%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  cabecalhoBottom: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 25,
  },
  cabecalho: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#392620",
    height: 130,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#808080',
    width: '100%',
    fontWeight: 'bold',
    //marginLeft: 15,
    height: 30,
    fontSize: 15,
    //marginTop: 10,
    color: "darkorange",
    backgroundColor: '#fef5da',
    textAlign: "center",
    borderRadius: 75,
  },
  pesquisa: {
    width: '100%',
    height: '100%',
    borderWidth: 0,
    borderBottomWidth: 0,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    color: "darkorange",
    //marginBottom: 10,
    //marginTop: 15,
    paddingHorizontal: '30%',
  },
  chat: {
    backgroundColor: "#fef5da",
    color: "darkorange",
    width: '90%',
    marginTop: 50,
    height: 150,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  chatRight: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 5,

  },
  username: {
    fontSize: 15,
    color: "darkorange",
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 1,
  },
  descricao: {
    fontSize: 11,
    color: "grey",
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  lado: {
    flexDirection: 'row',
    paddingLeft: 7
  }
})

export default EscolhaChat;