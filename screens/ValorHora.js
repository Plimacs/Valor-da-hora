import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import HoraAtual from '../components/HoraAtual';

function ValorHora() {
  const [iniciou, setIniciou] = useState([]);
  const [encerrou, setEncerrou] = useState([]);
  const [trabalhou, settrabalhou] = useState([]);
  const [contando, setContando] = useState(false);

const handleIniciar = () => {
  const agora = new Date();
  const horaInicio = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
  setIniciou([...iniciou, horaInicio]);
  setContando(true);
};

const handleEncerrar = () => {
  const agora = new Date();
  const horaEncerramento = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
  setEncerrou([...encerrou, horaEncerramento]);

  const horaInicio = iniciou[iniciou.length - 1];
  const partesInicio = horaInicio.split(":");
  const partesEncerramento = horaEncerramento.split(":");
  
  const horas = partesEncerramento[0] - partesInicio[0];
  const minutos = partesEncerramento[1] - partesInicio[1];
  const segundos = partesEncerramento[2] - partesInicio[2];

  const tempoTrabalhado = `${horas}:${minutos}:${segundos}`;
  settrabalhou([...trabalhou, tempoTrabalhado]);
  setContando(false);
};

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Horário atual:</Text>
      <Text style={contando ? styles.horasTituloContando : styles.horasTitulo}>
        <HoraAtual />
      </Text>

      <View style={styles.containerOpcoes}>
        <Button
          title={contando ? "Encerrar" : "Iniciar"}
          onPress={contando ? handleEncerrar : handleIniciar}
        />
      </View>
      <View style={styles.containerHoras}>
        <View style={styles.tabela}>
          <View style={styles.colunaTabela}>
            <Text>Iniciou:</Text>
            {iniciou.map((hora, index) => (
              <Text key={index}>{hora}</Text>
            ))}
          </View>
          <View style={styles.colunaTabela}>
            <Text>Encerrou:</Text>
            {encerrou.map((hora, index) => (
              <Text key={index}>{hora}</Text>
            ))}
          </View>
          <View style={styles.colunaTabela}>
            <Text>Trabalhou:</Text>
            {trabalhou.map((tempo, index) => (
              <Text key={index}>{tempo}</Text>
            ))}
          </View>
        </View>
        <Button title="Calcular" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1
  },
  horasTitulo: {
    fontSize: 40,
  },
  horasTituloContando: {
    fontSize: 40,
    color: 'green',
  },
  textoTitulo: {
    fontSize: 25,
  },
  containerOpcoes: {},
  containerHoras: {
    margin: 30,
  },
  tabela: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colunaTabela: {
    margin: 10
  },
});

export default ValorHora;
