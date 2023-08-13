import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: '2',
      name: 'Prabhas Raju',
      label: 'Rebel Star',
      imgSrc:
        'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Prabhas_1649138240.webp',
    },
    {
      id: '3',
      name: 'Mrunal Thakur',
      label: 'Great Actress',
      imgSrc:
        'https://imgnew.outlookindia.com/public/uploads/articles/2021/10/30/Mrunal_Thakur_21.jpg',
    },
    {
      id: '4',
      name: 'Priyanka Mohan',
      label: ' New Generation Actress',
      imgSrc:
        'https://i.pinimg.com/736x/4d/c0/f1/4dc0f1715a82cbd6f2ead0be3f4e7488.jpg',
    },
    {
      id: '5',
      name: 'Pranita Subhash',
      label: 'Sweet and Smart Actress',
      imgSrc:
        'https://cdn.mygodimages.com/mygodimg/large/11625908415r7e37ko10sjz8vc3ezwru0rcicya72ugvkq75krropo9cqetnktwd9nouhyy6bvveyv0sa3g20wasn0un2tg4w55dxmhaujvsrq0.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(contact => (
          <View id={contact.id} style={styles.contactContainer}>
            <Image source={{uri: contact.imgSrc}} style={styles.contactImg} />
            <View>
              <Text style={styles.contactTitle}>{contact.name}</Text>
              <Text>{contact.label}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  contactContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    alignItems: 'flex-start',
    gap: 12,
  },
  contactImg: {
    width: 70,
    height: 70,
    borderRadius: 500,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});
