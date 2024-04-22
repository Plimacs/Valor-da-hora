import * as React from 'react';
import { Button, View, Text } from 'react-native';

function CalcularFaturamento({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Desculpe, esta opção ainda está em desenvolvimento.</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default CalcularFaturamento;