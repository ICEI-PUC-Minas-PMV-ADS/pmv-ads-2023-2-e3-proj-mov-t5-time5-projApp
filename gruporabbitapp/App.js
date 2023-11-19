import { Text, SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Avatar } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View><Icon name='menu-book' style={styles.iconBook}/></View>
      <View><Text style={styles.textoBook}>Rabbit Book</Text></View>
      <View style={styles.header}>                   
        <View style={styles.titulo}>
          <Text style={styles.tituloTexto}>Novo Grupo</Text>
        </View>
        <View>
          <Icon name='group' style={styles.iconGroup}/>
        </View>
        <View style={styles.pesquisa}>            
          <View style={styles.searchShadow}></View>
          <TextInput  inputMode='search' style={styles.search} placeholder='Pesquisar' placeholderTextColor='gray'/>
          <View>
            <Icon name='search' style={styles.iconSearch}/>
          </View>      
        </View>      
      </View>
      <View style={styles.perfil}>
        <View style={styles.linha}></View>
        <View style={styles.foto}>
          <View style={styles.perfilshadow1}></View>
          <Avatar.Image size={100} source={require('./Perfil1.jpg')} />      
        </View>
        <View>
          <Text style={styles.nomeTexto}>Cláudio Luiz</Text>      
        </View>
        <View style={styles.radio}>      
        </View>
        <View style={styles.linha2}></View>      
      </View>
       <View style={styles.perfil2}> 
        <View style={styles.foto}>
          <View style={styles.perfilshadow2}></View>
          <Avatar.Image size={100} source={require('./Perfil2.jpg')} />      
        </View>
        <View style={styles.nome}>
          <Text style={styles.nomeTexto}>Monique</Text>      
        </View>
        <View style={styles.radio}>      
        </View>
        <View style={styles.linha2}></View>      
      </View>
       <View style={styles.perfil3}>
        <View style={styles.foto}>
          <View style={styles.perfilshadow3}></View>
          <Avatar.Image size={100} source={require('./Perfil3.jpg')} />      
        </View>
        <View style={styles.nome}>
          <Text style={styles.nomeTexto}>Luiz Roberto</Text>      
        </View>
        <View style={styles.radio}>      
        </View>
        <View style={styles.linha2}></View>        
        <View style={styles.buttom}>
          <Button  title="Criar Chat em Grupo" color="darkorange"  onPress={() => Alert.alert('Grupo Criado')}/>
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

  header:{
    /*backgroundColor:'blue', */
    width:380,
    height:150,
    marginTop:70,
  },

  iconBook:{
    position:'absolute',
    color:'#a18262',
    fontSize:30,
    marginTop:-80,
    marginLeft:120,
    opacity:0.3
  },

  textoBook:{
    position:'absolute',
    fontSize:22,
    marginTop:-80,
    marginLeft:150,
    color:'#a18262',
    opacity:0.3

  },

  iconGroup:{
    position:'absolute',
    color:'darkorange',
    fontSize:50,
    marginTop:-60,
    marginLeft:80,
  },

  titulo:{
    /*backgroundColor:'darkblue',*/
    width:380,
    height:70,
    alignItems:'center',
    justifyContent:'center',    
  },

  tituloTexto:{
    color:'darkorange',
    fontSize:25,
    fontWeight:'bold',  
    marginLeft:60,
  },

   iconSearch:{
    position:'absolute',
    color:'orange',
    fontSize:30,
    marginTop:-35,
    marginLeft:-140,
    opacity:0.8
  },

  pesquisa:{
    alignItems:'center',
    marginTop:20,
  },

  search:{
    width:300,
    height:40,
    backgroundColor:'#fef5da',
    borderRadius:20,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',
    color:'orange' 
  },

  searchShadow:{
    position:'absolute',
    backgroundColor:'black',
    width:300,
    height:40,
    borderRadius:20,
    opacity:0.3,  
    marginTop:5,   
  },

  perfil:{
    position:'absolute',
    /*backgroundColor:'orange',*/
    width:380,
    height:150,    
    marginTop:200,
    alignItems:'center',    
  },

  perfilshadow1:{
    position:'absolute',
    backgroundColor:'black',
    width:105,
    height:105,
    borderRadius:100,
    opacity:0.3,
    marginLeft:1,
    marginTop:0
  },

   perfil2:{
    position:'absolute',
    /*backgroundColor:'orange',*/
    width:380,
    height:150,    
    marginTop:380,
    alignItems:'center', 
  },

  perfilshadow2:{
    position:'absolute',
    backgroundColor:'black',
    width:105,
    height:105,
    borderRadius:100,
    opacity:0.3,
    marginLeft:1,
    marginTop:0
  },

   perfil3:{
    position:'absolute',
    /*backgroundColor:'orange',*/
    width:380,
    height:150,    
    marginTop:520,
    alignItems:'center',
  },

  perfilshadow3:{
    position:'absolute',
    backgroundColor:'black',
    width:105,
    height:105,
    borderRadius:100,
    opacity:0.3,
    marginLeft:1,
    marginTop:0
  },

  foto:{
    /*backgroundColor:'gray',*/
    marginLeft:-250,
    marginTop:20,
    width:100,
    height:100,  
  },  

  nomeTexto:{
    color:'white',
    position:'absolute',
    fontSize:25,
    marginTop:-65,
    marginLeft:-50,
    fontWeight:'bold',
  },

  radio:{
    position:'relative',
    width:30,
    height:30,
    borderColor:'darkorange',
    borderRadius:20,
    borderWidth:3,   
    marginLeft:300,
    marginTop:-60,
  },

  linha:{
    backgroundColor:'#a18262',
    marginTop:30,
    width:350,
    height:1,
  },

  linha2:{
    backgroundColor:'#a18262',
    marginTop:50,
    width:350,
    height:1,
  },
  
  buttom:{    
    marginTop:50,
  }, 

});
