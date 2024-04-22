import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.botao}>
        <Button
          title="Iniciar trabalho"
          onPress={() => navigation.navigate('ValorHora')}
        />
      </View>
      <View style={styles.botao}>
        <Button
          title="Ver Histórico"
          onPress={() => navigation.navigate('Historico')}
        />
        </View>
      <View style={styles.botao}>
        <Button
          title="Calcular faturamento, lucro e despesas."
          onPress={() => navigation.navigate('CalcularFaturamento')}
        />
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
  botao: {
    padding: 10
  }
});

export default Home;
