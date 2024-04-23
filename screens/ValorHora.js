import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import HoraAtual from '../components/HoraAtual';

function ValorHora() {
  const [iniciou, setIniciou] = useState([]);
  const [encerrou, setEncerrou] = useState([]);
  const [contando, setContando] = useState(false)

  const handleIniciar = () => {
    const horaInicio = new Date().toLocaleTimeString(); 
    setIniciou([...iniciou, horaInicio]);
    setContando(true);
  };

  const handleEncerrar = () => {
    const horaEncerramento = new Date().toLocaleTimeString();
    setEncerrou([...encerrou, horaEncerramento]);
    setContando(false);
  }
  
  return (
    <View style={styles.conteiner}>
      <Text style={styles.textoTitulo}>Horário atual:</Text> 
      <Text style={styles.horasTitulo}> <HoraAtual /> </Text>

      <View styles={styles.conteinerOpcoes}>
      <Button 
      title={contando ? "Encerrar" : "Iniciar"} 
      onPress={contando ? handleEncerrar : handleIniciar}/>
      </View>
      <View>
        <Text>Últimas horas iniciadas:</Text>
          {iniciou.map((hora, index) => (
            <Text key={index}>{hora}</Text>
          ))}
        <Text>Últimas horas encerradas:</Text>
          {encerrou.map((hora, index) => (
            <Text key={index}>{hora}</Text>
          ))}
      </View>
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
  conteinerOpcoes: {
    margin: 10
  }
});
export default ValorHora;
