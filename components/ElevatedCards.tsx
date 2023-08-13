import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap 1</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap 2</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap 3</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap 4</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap 5</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap 6</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 4,
  },
  cardElevated: {
    backgroundColor: '#e4c1f9',
    elevation: 4,
  },
});
