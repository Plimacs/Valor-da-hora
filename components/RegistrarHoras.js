import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const MeuComponente = () => {
  const [iniciou, setIniciou] = useState([]);

  const handlePressBotao = () => {
    setIniciou([...iniciou, HoraAtual]);
  };

  return (
    <View>
      <Text>Últimas horas iniciadas:</Text>
      {iniciou.map((hora, index) => (
        <Text key={index}>{hora}</Text>
      ))}
      <Button title="Iniciar" onPress={handlePressBotao} />
    </View>
  );
};

export default MeuComponente;
