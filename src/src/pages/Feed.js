import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PostagemService from '../Services/PostagemService';
import UsuarioService from '../Services/UsuarioService';

const usuarioService = new UsuarioService();

const PostagemView = ({ postagem, nomeUsuario }) => {

  const navigation = useNavigation();

  const perfilUsuario = async () => {
    try {
      const usuario = await usuarioService.Get(postagem.autorId);
      navigation.navigate('perfil', { usuario });
    } catch (error) {
      console.error('Erro ao obter usuário:', error);
    }
  };

  return (
    <View>
      <Pressable onPress={perfilUsuario}>
        <View style={styles.lado}>

          <Image source={require('../Assets/user1.png')}
            style={{ flexDirection: "row", height: 35, width: 35 }} />
          <Text style={styles.user}> {nomeUsuario} </Text>

        </View>
      </Pressable>

      <View style={styles.livro}>

        <Text style={styles.publi}>{postagem.conteudo}</Text>
        <Image source={require('../Assets/Livro1.png')}
          style={{ width: "35%", height: 200, flexDirection: "row", }} />

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
              style={{ flexDirection: "row", height: 30, width: 36, marginLeft: 10, }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
};

const Feed = ({ navigation }) => {

  const [dadosApi, setDadosApi] = useState({
    usuario: [],
    postagem: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const posts = new PostagemService();
      try {
        const postData = await posts.GetAll();
        setDadosApi((prevDados) => ({ ...prevDados, postagem: postData }));
      } catch (error) {
        console.error('Erro na chamada da API de postagem:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersData = await usuarioService.GetAll();
        const postagemService = new PostagemService();
        const postagensData = await postagemService.GetAll();
        const usuarioFiltrado = usersData.filter((user) =>
          postagensData.some((postagem) => postagem.autorId === user.id)
        );
        setDadosApi((prevDados) => ({ ...prevDados, usuario: usuarioFiltrado }));
      } catch (error) {
        console.error('Erro ao buscar usuarios:', error);
      }
    };

    fetchUserData();
  }, []);

  const navigationPublicacao = useNavigation();

  const createPost = () => {
    navigationPublicacao.navigate('publicacao');
  }

  const findUserName = (autorId) => {
    const usuario = dadosApi.usuario.find((user) => user.id === autorId);
    return usuario ? usuario.nome : 'Usuário Desconhecido';
  };

  return (

    <View style={styles.container}>

      <Text style={styles.header}> RabbitBook </Text>

      <TouchableOpacity onPress={createPost} style={styles.botao1} >

        <Text style={styles.botoes}>Criar publicação</Text>

      </TouchableOpacity>
      <View style={{ flex: 1, padding: 16 }}>
        {dadosApi.postagem &&
          dadosApi.postagem.map((postagem) => (
            <PostagemView
              key={postagem.id}
              postagem={postagem}
              nomeUsuario={findUserName(postagem.autorId)}
              navigation={navigation}
            />
          ))}
      </View>
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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