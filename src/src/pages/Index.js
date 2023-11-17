import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PostagemService from '../Services/PostagemService';
import UsuarioService from '../Services/UsuarioService';

const PostagemView = ({ postagem, nomeUsuario }) => (

    <View style={{ marginBottom: 16, backgroundColor: "#8c8c8c", borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 8}}>
            <Image
                source={{ uri: ".../img/userImg.png" }}
                style={{ width: 50, height: 50, borderRadius: 25, marginRight: 8 }}
            />

            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>{nomeUsuario}</Text>
            </View>

            <TouchableOpacity>
                <Text>🗨️</Text>
            </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8, marginLeft: 8 }}>
            <Text>{postagem.conteudo}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginLeft: 8, justifyContent: 'flex-start' }}>
            <TouchableOpacity>
                <Text>❤️</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>🗨️</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const Index = ({ navigation }) => {

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
            const users = new UsuarioService();
            try {
                const usersData = await users.GetAll();
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

    const encontrarNomeUsuario = (autorId) => {
        const usuario = dadosApi.usuario.find((user) => user.id === autorId);
        return usuario ? usuario.nome : 'Usuário Desconhecido';
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            {dadosApi.postagem &&
                dadosApi.postagem.map((postagem) => (
                    <PostagemView
                        key={postagem.id}
                        postagem={postagem}
                        nomeUsuario={encontrarNomeUsuario(postagem.autorId)}
                    />
                ))}
        </View>
    )
}

export default Index;