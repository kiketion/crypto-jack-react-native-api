import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <Text style={styles.text}>{coin.name}</Text>
      </View>
      <Text style={styles.text}>${coin.current_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#121212',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinName: {
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    color: '#ffffff',
  },
});

export default CoinItem;
