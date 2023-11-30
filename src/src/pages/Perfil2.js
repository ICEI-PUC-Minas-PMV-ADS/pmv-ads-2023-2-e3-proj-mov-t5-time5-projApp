import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <View style={styles.foto}>
                            <Image style={styles.fotoImg} source={require('../Assets/coelho2.png')} />
                        </View>
                        <View style={styles.leftHeader}>
                            <View style={styles.nomeUser}>
                                <Text style={styles.nome}>Ana Lívia</Text>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.infoBox}>Informações do usuário, conteúdo referente a autores e estilos favoritos, por exemplo...</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.livrosDisp}>
                        <View>
                            <Icon name='pluscircleo'style={styles.iconLivr}/>
                        </View>
                        <View>
                            <Text style={styles.textLivr}>Livros Disponíveis</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.areaLivros}>
                    <View style={styles.linhaLivros}>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro1.jpg')} />
                        </View>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro2.jpg')} />
                        </View>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro3.jpg')} />
                        </View>
                    </View>
                    <View style={styles.linhaLivros}>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro4.jpg')} />
                        </View>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro5.jpg')} />
                        </View>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro6.jpg')} />
                        </View>
                    </View>
                    <View style={styles.linhaLivros}>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro7.jpg')} />
                        </View>
                        <View style={styles.livro}>
                            <Image style={styles.imagemLivro} source={require('../img/Livro8.jpg')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#392620',
        padding: 20,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '94%',
        paddingTop: 10,
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        height: 110,
    },
    leftHeader: {
        display: 'flex',
        flex: 1,
        paddingLeft: 10,
        flexDirection: 'column',
        height: 110,
    },
    foto: {
        width: 110,
        height: 110,
        borderRadius: 75,
        overflow: 'hidden',
    },
    fotoImg: {
        width: '100%',
        height: '100%',
    },
    nomeUser: {
        height:'33%'
    },
    nome: {
        fontSize: 24,
        color: 'darkorange',
        fontWeight: 'bold',
    },
    box: {
        height: '66%',
    },
    infoBox: {
        color: 'black',
        backgroundColor: '#fef5da',
        height: '100%',
        padding: 2,
        borderRadius: 5,
    },
    livrosDisp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    iconLivr: {
        marginRight: 10,
        fontSize:20,
        color:'darkorange',
        fontWeight:'bold'  
    },
    textLivr: {
        fontSize: 20,
        color: 'darkorange',
        fontWeight: 'bold',
    },
    areaLivros: {
        flexDirection: 'column',
        backgroundColor: '#fef5da',
        alignSelf: 'center',
        borderRadius: 20,
        paddingBottom: '5%',
        height:'95%',
        width: '94%',
    },
    linhaLivros: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '1.5%',
        marginTop: '3%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    livro: {
        width: '32%',
        paddingLeft: '2%', 
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    imagemLivro: {
        height: 150,
        borderRadius: 5,
        minHeight: 150,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
});
