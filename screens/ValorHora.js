import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import HoraAtual from '../components/HoraAtual'

function ValorHora() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.textoTitulo}>Horário atual:</Text> 
      <Text style={styles.horasTitulo}> <HoraAtual /> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horasTitulo: {
    fontSize: 40
  },
  textoTitulo: {
    fontSize: 25
  },
});
export default ValorHora;
