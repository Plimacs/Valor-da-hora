import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalcularHoras = ({ horasTrabalhadas, taxaHoraria }) => {
  const calcularTotalHoras = () => {
    let totalHoras = 0;
    horasTrabalhadas.forEach(hora => {
      const [horas, minutos, segundos] = hora.split(":").map(Number);
      totalHoras += horas + minutos / 60 + segundos / 3600;
    });
    return totalHoras;
  };

  const calcularPagamentoTotal = () => {
    const totalHoras = calcularTotalHoras();
    const pagamentoTotal = totalHoras * taxaHoraria;
    return pagamentoTotal.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Total de horas trabalhadas: {calcularTotalHoras().toFixed(2)}</Text>
      <Text style={styles.texto}>Valor da hora: R${taxaHoraria.toFixed(2)}</Text>
      <Text style={styles.texto}>Preço final: R${calcularPagamentoTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CalcularHoras;
