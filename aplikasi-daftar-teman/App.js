import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DaftarTeman from './components/DaftarTeman';
import DetailInformasi from './components/DetailInformasi';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DaftarTeman">
        <Stack.Screen name="DaftarTeman" component={DaftarTeman} />
        <Stack.Screen name="DetailInformasi" component={DetailInformasi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
