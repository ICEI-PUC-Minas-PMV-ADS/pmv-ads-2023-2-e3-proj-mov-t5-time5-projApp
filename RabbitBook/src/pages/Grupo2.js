import { Text, SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      
      <View style={styles.header}>
      <View><Icon name='menu-book' style={styles.iconBook}/></View>
      <View><Text style={styles.textoBook}>Rabbit Book</Text></View>                   
        <View style={styles.titulo}>
          <Text style={styles.tituloTexto}>Novo Grupo</Text>
        </View>
        <View>
          <Icon name='group' style={styles.iconGroup}/>
        </View>
        <View>          
          <View></View>
          <View style={styles.textoGrupo}>  

            <Text style={styles.nomeGrupo}>Nome do Grupo</Text>        
           
            <View style={styles.linha}></View>
            <View>
              <View style={styles.circulo}></View>
              <Icon name='camera-alt' style={styles.iconTexto}/>
            </View>      
          </View>    
        </View>
      </View>
      <View style={styles.perfis}>
        <View>
          <Text style={styles.participantes}>Participantes:3</Text>      
        </View>
        <View style={styles.perfil1}>
          <Avatar.Image size={100} source={require('../Assets/coelho2.png')} />  
              <Text style={styles.participantes}>Cláudio Luiz</Text>
        </View>
        
        <View style={styles.perfil2}>
          <Avatar.Image size={100} source={require('../Assets/coelho2.png')} />  
              <Text style={styles.participantes}>Monique</Text>
        </View>

        <View style={styles.perfil3}>
          <Avatar.Image size={100} source={require('../Assets/coelho2.png')} />  
              <Text style={styles.participantes}>Luiz Roberto</Text>
        </View>

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
    justifyContent: 'center',
    backgroundColor: '#392620',
    padding: 8,
  },

  header:{
    /*backgroundColor:'blue', */
    width:380,
    height:150,
    marginTop:-360,
  },
  
  iconBook:{
    position:'absolute',
    color:'#a18262',
    fontSize:30,
    marginTop:-50,
    marginLeft:120,
    opacity:0.3
  },

  textoBook:{
    position:'absolute',
    fontSize:22,
    marginTop:-50,
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

  iconTexto:{
    position:'absolute',
    color:'orange',
    fontSize:30,
    marginTop:-35,
    marginLeft:-190,
    opacity:0.8
  },

  circulo:{
    position:'absolute',
    width:70,
    height:70,
    borderColor:'darkorange',
    borderRadius:40,
    borderWidth:1,   
    marginLeft:-210,
    marginTop:-55,
  },

  textoGrupo:{
    alignItems:'center',
    marginTop:20,
    marginLeft:70,
  },  

  nomeGrupo:{

    position:'absolute',
    marginTop:15,
    fontSize:17,
    color:'white'

  },

  linha:{
    backgroundColor:'#a18262',
    marginTop:40,
    width:250,
    height:1,
  },  

  perfis:{
    position:'relative',
    marginTop:90,
  },

  participantes:{
    alignSelf:'center',
    fontSize:18,
    color:'#fef5da',
  },

  perfil1:{
    position:'absolute',
    marginTop:60

  },

  perfil2:{
    position:'absolute',
    marginTop:60,
    marginLeft:140,

  },

  perfil3:{
    position:'absolute',
    marginTop:60,
    marginLeft:270,

  },

  buttom:{    
    position:'absolute',
    marginTop:400,
    marginLeft:100,
  }, 

  
});