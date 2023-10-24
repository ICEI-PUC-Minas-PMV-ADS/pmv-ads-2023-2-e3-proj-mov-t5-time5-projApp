import React from 'react';
import {View, Text} from 'react-native';
import Cadastro from './src/pages/Cadastro'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Routes from './src/Routes/Routes';

const App = () => {

return (

  <NavigationContainer>
    <Routes/>
  </NavigationContainer>

);

}

export default App;
