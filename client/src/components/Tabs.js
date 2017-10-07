import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Fridge from './Fridge';
import MessageView from './MessageView';

Fridge.navigationOptions = {
  tabBarLabel: 'My Fridge',
  tabBarIcon: ({ tintColor, focused }) => (
    <MaterialCommunityIcons
      name={focused ? 'fridge-filled' : 'fridge'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

MessageView.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ tintColor, focused }) => (
    <MaterialCommunityIcons
      name={focused ? 'message' : 'message-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const Tabs = TabNavigator(
  {
    Home: {
      screen: Fridge,
      path: '',
    },
    Messages: {
      screen: MessageView,
      path: 'messages',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#3c85ca',
      style: {
        backgroundColor: 'white',
        borderTopColor: 'white'
      }
    },
  }
);

export default Tabs;