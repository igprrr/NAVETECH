import React, {useState} from 'react';
import {NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import cadastro_usuario from './src/pages/cadastro_usuario';
import Lista from './src/pages/Lista';
import Home from './src/pages/Home';


const Stack = createNativeStackNavigator();

export default function projeto(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name = 'Home'
          component = {Home}
          options = {{
            title: 'tela principal',
            headerStyle:{
              backgroundColor: 'purple',
            }
            //headerShow: false (remove a barra de tela principal)
          }}/>

        <Stack.Screen
          name = 'Cadastro de usuario'
          component = {cadastro_usuario}
          options = {{
            title: 'cadastro',
            headerStyle:{
              backgroundColor: 'purple',
            }
          }}/>

        <Stack.Screen
          name = 'Lista de usuario'
          component = {Lista}
          options = {{
            title: 'lista',
            headerStyle:{
            backgroundColor: 'purple',
            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
