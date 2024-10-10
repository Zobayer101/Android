import React from 'react';

import Calculator from './components/Calculaor';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import History from './components/History';
import Scale from './components/Scale';
const Stack = createNativeStackNavigator();
const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: '@zobayer',

            headerStyle: {
              backgroundColor: '#012',
            },
            headerTintColor: '#fef',
            headerTitleStyle: {
              fontSize: 24,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: 'calculate history',
            headerStyle: {
              backgroundColor: '#123',
            },
            headerTintColor: '#efe',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="Scale"
          component={Scale}
          options={{
            title: 'Unit converter',
            headerStyle: {
              backgroundColor: '#123',
            },
            headerTintColor: '#efe',
            headerTitleStyle: {
              fontSize: 22,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
