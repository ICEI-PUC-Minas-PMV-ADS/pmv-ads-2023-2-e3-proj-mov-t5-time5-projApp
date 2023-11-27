import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login.js';
import Cadastro from '../pages/Cadastro.js';
import Home from '../pages/Home.js';
import Publicacao from '../pages/Publicacao.js';
import Feed from '../pages/Feed.js';
import Perfil from '../pages/Perfil.js';

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
        component={Perfil}
      />
    </Stack.Navigator>
  );
}

export default Routes
