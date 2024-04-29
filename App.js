import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ValorHora from './screens/ValorHora';
import Historico from './screens/Historico';
import CalcularFaturamento from './screens/CalcularFaturamento'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ValorHora" component={ValorHora} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="CalcularFaturamento" component={CalcularFaturamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;