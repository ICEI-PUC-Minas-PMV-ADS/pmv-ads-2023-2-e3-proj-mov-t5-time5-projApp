import * as React from 'react';
import { BottomNavigation, Text, StyleSheet } from 'react-native-paper';

import Feed from './Feed';
import Perfil from './Perfil';
import EscolhaChat from "./EscolhaChat";

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'feed', title: 'Feed', icon: 'home'},
    { key: 'chat', title: 'Chat', icon: 'chat-outline'},
    { key: 'perfil', title: 'Perfil', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feed: Feed,
    chat: EscolhaChat,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#fef5da'}}
      activeColor="darkorange"
      inactiveColor="gray"
    />
  );
};

export default MyComponent;
