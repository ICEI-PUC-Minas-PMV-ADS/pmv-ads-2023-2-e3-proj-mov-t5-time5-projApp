import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login.js';
import Cadastro from '../pages/Cadastro.js';
import Home from '../pages/Home.js';
import Publicacao from '../pages/Publicacao.js';
import Feed from '../pages/Feed.js';
import Perfil2 from '../pages/Perfil2.js';
import EscolhaChat from '../pages/EscolhaChat.js';
import Chat1 from '../pages/Chat1.js';
import Chat2 from '../pages/Chat2.js';
import Chat3 from '../pages/Chat3.js';
import grupo2 from '../pages/Grupo2.js';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="publicacao"
        component={Publicacao}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="perfil"
        component={Perfil2}
      />
      <Stack.Screen
        name="escolhaChat"
        component={EscolhaChat}
      />
      <Stack.Screen
        name="chat1"
        component={Chat1}
      />
      <Stack.Screen
        name="chat2"
        component={Chat2}
      />
      <Stack.Screen
        name="chat3"
        component={Chat3}
      />
      <Stack.Screen
        name="grupo2"
        component={grupo2}
      />
    </Stack.Navigator>
  );
}

export default Routes
