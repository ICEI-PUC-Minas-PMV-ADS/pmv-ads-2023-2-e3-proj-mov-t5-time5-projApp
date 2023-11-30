import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const Chat1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../Assets/coelho2.png')}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Claudio Luiz</Text>
          <Text style={styles.descricao}>Online há 3 horas</Text>
        </View>
      </View>

      <Text style={styles.receber}>Boa tarde, tudo bem?</Text>
      <Text style={styles.mandar}>Boa tarde, bem sim e você?</Text>
      <Text style={styles.receber}>
        Bem também, vi que anunciou a coletânea de Harry Potter para venda,
        está pedindo quanto por ela?
      </Text>
      <Text style={styles.mandar}>Estou pedindo 200 reais.</Text>
      <Text style={styles.receber}>
        Estou de acordo com o valor, gostaria de adquirir a coletânea
      </Text>
      <View style={styles.enviarContainer}>
        <TextInput style={styles.enviar} placeholder="Mensagem..." />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#392620',
    padding: 20,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 75,
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    fontSize: 15,
    color: 'darkorange',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 1,
  },
  descricao: {
    fontSize: 11,
    color: 'grey',
    textAlign: 'left',
  },
  enviarContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  enviar: {
    fontWeight: 'bold',
    height: 40,
    fontSize: 15,
    color: 'darkorange',
    backgroundColor: '#fef5da',
    borderRadius: 75,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  receber: {
    backgroundColor: 'darkorange',
    color: '#fef5da',
    borderRadius: 95,
    padding: 10,
    width: '60%',
    alignSelf: 'flex-start',
    marginBottom: 20,
    textAlign: 'center',
  },
  mandar: {
    backgroundColor: '#fef5da',
    color: 'darkorange',
    borderRadius: 95,
    padding: 10,
    width: '60%',
    alignSelf: 'flex-end',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Chat1;
