import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Feed from './Feed';
import Perfil from './Perfil';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'feed', title: 'Feed', icon: 'home'},
    { key: 'perfil', title: 'Perfil', icon: 'account'},
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'feed':
        return <Feed navigation={navigation} />;
      case 'perfil':
        return <Perfil/>;
    }
  };

  const navigation = useNavigation();

  const navigateToPerfil = async () => {
    try {

      const usuarioData = await AsyncStorage.getItem('usuarioData');
      const usuario = JSON.parse(usuarioData);
      console.log('Usuario ao navegar para perfil:', usuario);
      navigation.navigate('perfil', { usuario });
    } catch (error) {
      console.error('Erro ao obter dados do Local Storage:', error);
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#fef5da'}}
      activeColor="darkorange"
      inactiveColor="gray"
      onTabPress={navigateToPerfil}
    />
  );
};

export default Home;