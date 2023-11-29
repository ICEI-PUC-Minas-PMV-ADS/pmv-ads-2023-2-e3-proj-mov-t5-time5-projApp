import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



export default function Perfil({ route }) {
  console.log(route.params.usuario)
  const { usuario } = route.params.usuario;

  console.log(usuario)

  return (
    
    <SafeAreaView style={styles.container}>
    
      <View style={styles.perfil}>      
        <View style={styles.fotoshadow}></View>    
        <View style={styles.foto}>
          <Image style={styles.fotoImg} source={require('../img/foto.png')}/>          
        </View>   
        
        <View style={styles.nomeUser}>
          <Text style={styles.nome}>{usuario.nome}</Text>
        </View>   
        <View style={styles.shadow}></View>      
        <View style={styles.box}>
          <Text style={styles.infoBox}>Informações do usuário, conteudo referente a autores e estilos favoritos, por exemplo...</Text>
        </View>  
        
      </View> 
      <View style={styles.livrosDisp}>
        <View style = {styles.iconLivr}>
          <Icon name='pluscircleo' style={styles.livrDisp}/>
        </View>
        <View style = {styles.textLivr}>
          <Text style={styles.livrDisp}>Livros Disponíveis</Text>
        </View>
      </View>
      <View style={styles.livrContShadow}></View>
      <View style={styles.livrosCont}>
        <View style={styles.livrosContSub1}>
          <View style={styles.livroShadow1}></View>
          <Image style={styles.livros} source={require('../img/Livro1.jpg')}/>
          <View style={styles.livroShadow2}></View>
          <Image style={styles.livros} source={require('../img/Livro2.jpg')}/>
         <View style={styles.livroShadow3}></View>
          <Image style={styles.livros} source={require('../img/Livro3.jpg')}/>   
        </View>
      
        <View style={styles.livrosContSub2}>   
          <View style={styles.livroShadow4}></View>        
          <Image style={styles.livros} source={require('../img/Livro4.jpg')}/>
          <View style={styles.livroShadow5}></View>  
          <Image style={styles.livros} source={require('../img/Livro5.jpg')}/>
          <View style={styles.livroShadow6}></View>  
          <Image style={styles.livros} source={require('../img/Livro6.jpg')}/>  
        </View>

        <View style={styles.livrosContSub3}>
          <View style={styles.livroShadow7}></View>          
          <Image style={styles.livros} source={require('../img/Livro7.jpg')}/>
          <View style={styles.livroShadow8}></View>
          <Image style={styles.livros} source={require('../img/Livro8.jpg')}/> 
          
      </View>
    </View>
       
      
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#392620',
    alignItems: 'baseline',
    justifyContent: 'center',
    
  },
  perfil:{       
    position:'relative',
    marginTop:40,
    width:400, 
    height:150        
  },

  foto:{    
    position:'relative',
    width:100,
    height:100,
    
    
  },

  fotoImg:{
    width:110,
    height:110,
    marginTop:25,   
   marginLeft:15 
  },

  fotoshadow:{
    position:'absolute',
    backgroundColor: 'black',
    height:110,
    width:110,
    marginLeft:20,
    marginTop:30,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,   
    opacity:0.3
  },


  nome:{
    fontSize:24,
    color:'darkorange',
    fontWeight:'bold',    
    
  },

  nomeUser:{
    position:'relative',
    width:100,
    height:50,
    marginLeft:200,
    marginTop:-100,
    alignItems:'center',
    justifyContent:'center'    
  },


  box:{
    position:'absolute',
    backgroundColor: '#fef5da',
    height:70,
    width:220,
    marginLeft:145,
    marginTop:45,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,   
     
  },

   shadow:{
    position:'relative',
    backgroundColor: 'black',
    height:70,
    width:220,
    marginLeft:150,
    marginTop:1,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    opacity:0.3   
     
  },

  infoBox:{
    color:'black',  
    padding:2    
  },

  livrosDisp:{
    position:'absolute',
    height:30,
    width:400,
    marginLeft:-200,
    marginTop:200,
    alignItems:'center',
    justifyContent:'center'


  },

  iconLivr:{
    marginLeft:-170,
    marginTop:5,    
  },

  textLivr:{
    marginLeft:25,
    marginTop:-25
  },


  livrDisp:{
    fontSize:20,
    color:'darkorange',
    fontWeight:'bold'       
  },

  livrosCont:{  
    position:'absolute',
    backgroundColor:'#fef5da',
    width:370,
    height:520,
    marginTop:250,
    borderRadius:5,    
  },

  livrContShadow:{  
    position:'absolute',
    backgroundColor:'black',
    width:378,
    height:520,
    marginTop:255,     
    borderRadius:5,
    opacity:0.3
  },

  livros:{
    width:100,
    height:130,
    marginLeft:20,
    marginTop:30,        
  },

  livroShadow1:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:26,
    opacity:0.2      
  },

   livroShadow2:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:145,
    opacity:0.2      
  },

   livroShadow3:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:265,
    opacity:0.2      
  },

   livroShadow4:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:25,
    opacity:0.2      
  },

   livroShadow5:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:145,
    opacity:0.2      
  },

   livroShadow6:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:265,
    opacity:0.2      
  },

   livroShadow7:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:25,
    opacity:0.2      
  },

   livroShadow8:{
    position:'absolute',
    backgroundColor:'black',
    width:100,
    height:130,    
    marginTop:35, 
    marginLeft:145,
    opacity:0.2      
  },

  livrosContSub1:{
    
    flexDirection:'row',
    position:'absolute',    
    width:400,
    height:120,
    marginTop:-5,
    marginLeft:-5    
  },  

  livrosContSub2:{
    
    flexDirection:'row',
    position:'absolute',    
    width:400,
    height:120,
    marginTop:160,    
  },  

  livrosContSub3:{
    
    flexDirection:'row',
    position:'absolute',    
    width:400,
    height:120,
    marginTop:325,    
  },  

  

  

});