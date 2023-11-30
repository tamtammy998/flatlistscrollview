import React from 'react';
import { View, Text, FlatList, ScrollView, Button, StyleSheet } from 'react-native';

export const guestsData = [
  { id: '1', name: 'Miarafe Betasa', address: 'Canada' },
  { id: '2', name: 'Monaliza Liparto', address: 'Israel' },
  { id: '3', name: 'Peter Kyle Gingo', address: 'Singapore ' },
  { id: '4', name: 'Jenmarie Cumahig', address: 'USA' },
  { id: '5', name: 'Floramae Requillo', address: 'Thailand' },
  { id: '6', name: 'Riza Batulanon', address: 'India' },
  { id: '7', name: 'Clea Mae Gultiano', address: 'Philippines' },
  { id: '8', name: 'Desserie Gomunit', address: 'Ice Land' },
  { id: '9', name: 'Darwin Patac', address: 'Pacific ocean' },
  { id: '10', name: 'Pearl Angelie Lansang', address: 'Korea' },
  { id: '11', name: 'Clea Mae Gultiano', address: 'Philippines' },
  { id: '12', name: 'Nikko Bryle Alturas', address: 'China' },
  { id: '13', name: 'Mac Aldwin Handumon', address: 'USA' },
  { id: '14', name: 'Karl Loquias', address: 'Russia' },
  { id: '15', name: 'Jess Jumawan', address: 'Wales' },
  { id: '16', name: 'Junrey Genzon', address: 'Canada' },
  { id: '17', name: 'carlo namor', address: 'Africa' },
  { id: '18', name: 'Rea Galleros', address: 'Japan' },
  { id: '19', name: 'Mary Jane Sanchez', address: 'Portugal' },
  { id: '20', name: 'christine padonia', address: 'Taiwan' },
];

const getInitials = (name) => {
  const nameArray = name.split(' ');
  return nameArray.map((word) => word[0]).join('').toUpperCase();
};

const CombinedScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Use ScrollView"
        onPress={() => navigation.navigate('ScrollView')}
      />
      <ScrollView>
        {guestsData.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
            </View>
            <View>
              <Text style={styles.boldText}>{item.name}</Text>
              <Text style={styles.smallText}>{item.address}</Text>
            </View>
            <Text style={styles.dots}>{'\u2022\u2022\u2022'}</Text>
          </View>
        ))}
      </ScrollView>

      <Button
        title="Use FlatList"
        onPress={() => navigation.navigate('FlatList')}
      />
      <FlatList
        data={guestsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.boldText}>{item.name}</Text>
            <Text style={styles.smallText}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00ace6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
  },
  dots: {
    marginLeft: 'auto',
    marginRight: 15,
    fontSize: 20,
  },
});

export default CombinedScreen;