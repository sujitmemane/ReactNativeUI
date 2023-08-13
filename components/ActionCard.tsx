import {
  Linking,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsiteHandler = (webLink: string) => {
    Linking.openURL(webLink);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.actionText}>Want To Book Ticket?</Text>
      <TouchableOpacity
        onPress={() =>
          openWebsiteHandler('https://twitter.com/iAmSujitMemane')
        }>
        <Text style={styles.cardButton}> Buy Ticket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#edf2fb',
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardButton: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 3,
    fontSize: 12,
    borderRadius: 24,
    fontWeight: 'bold',
    backgroundColor: '#faa307',
  },
});
