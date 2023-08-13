import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Shaniwaarwada_Pune.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Shaniwar Wada</Text>
          <Text style={styles.cardLabel}>
            The Famous Tourist Place in Maharastra
          </Text>
          <Text style={styles.cardDescription}>
            Shaniwar Wada is a historical fortification in the city of Pune,
            India. Built in 1732, it was the great seat of the Peshwas of the
            Maratha Empire until 1818.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 4,
  },
  card: {
    margin: 10,

    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#edf2fb',
    elevation: 3,
  },
  cardImage: {
    height: 200,
    marginBottom: 4,
    borderRadius: 4,
  },
  cardBody: {},
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  cardLabel: {marginHorizontal: 4, fontWeight: '600'},
  cardDescription: {
    marginHorizontal: 4,
    paddingBottom: 24,
    paddingTop: 4,
    fontSize: 14,
  },
});
