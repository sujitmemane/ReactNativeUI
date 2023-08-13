import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  const elevatedCardList = [
    {id: '1', text: 'Tap 1'},
    {id: '2', text: 'Tap 2'},
    {id: '3', text: 'Tap 3'},
    {id: '4', text: 'Tap 4'},
    {id: '5', text: 'Tap 5'},
    {id: '6', text: 'Tap 6'},
  ];

  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {elevatedCardList.map(item => (
          <View key={item.id} style={[styles.card, styles.cardElevated]}>
            <Text>{item.text}</Text>
          </View>
        ))}
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
