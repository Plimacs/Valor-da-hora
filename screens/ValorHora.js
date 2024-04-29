import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';

import HoraAtual from '../components/HoraAtual';

function ValorHora() {
  const [iniciou, setIniciou] = useState([]);
  const [encerrou, setEncerrou] = useState([]);
  const [trabalhou, setTrabalhou] = useState([]);
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
    const [inicioHora, inicioMinuto, inicioSegundo] = horaInicio.split(":");
    const [encerraHora, encerraMinuto, encerraSegundo] = horaEncerramento.split(":");

    const tempoInicio = new Date(0, 0, 0, inicioHora, inicioMinuto, inicioSegundo);
    const tempoEncerramento = new Date(0, 0, 0, encerraHora, encerraMinuto, encerraSegundo);

    const diferenca = tempoEncerramento - tempoInicio;

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    const tempoTrabalhado = `${horas}:${minutos}:${segundos}`;
    setTrabalhou([...trabalhou, tempoTrabalhado]);
    setContando(false);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
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
    </ScrollView>
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