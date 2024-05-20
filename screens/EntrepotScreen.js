import React from 'react';
import { View, Text, Button } from 'react-native';

export default function EntrepotSreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Entrepot</Text>
      <Button title="Suivant" onPress={() => navigation.navigate('Ecran2')} />
    </View>
  );
}