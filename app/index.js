// import * as React from 'react';
import React from 'react';

import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './screens/Contacts';
import MyStack, { NotificationsScreen, ProfileScreen } from './config/router.js';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
