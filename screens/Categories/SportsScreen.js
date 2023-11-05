import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SportsScreen = () => {
  const navigation = useNavigation();

  const sportsData = [
    {
      title: 'Volleyball',
      description: 'Enjoy the fast-paced game of volleyball with friends and teammates.',
      buttonText: 'Join Club',
    },
    {
      title: 'Badminton',
      description: 'Play badminton and improve your agility and reflexes on the court.',
      buttonText: 'Join Club',
    },
    {
      title: 'Tennis',
      description: 'Hit the tennis court and show off your forehand and backhand skills.',
      buttonText: 'Join Club',
    },
    {
      title: 'Football',
      description: 'Join our football club and showcase your soccer skills on the field.',
      buttonText: 'Join Club',
    },
    {
      title: 'Cricket',
      description: 'Be a part of the cricket team and enjoy the gentlemans game.',
      buttonText: 'Join Club',
    },
    {
      title: 'Chess',
      description: 'Play chess and enhance your strategic thinking and planning abilities.',
      buttonText: 'Join Club',
    },
    {
      title: 'Table Tennis',
      description: 'Compete in exciting table tennis matches with fellow players.',
      buttonText: 'Join Club',
    },
  ];

  const handleItemPress = (title) => {
    console.log(`Pressed: ${title}`);
    navigation.navigate('ClubDetails', { title });
  };

  const handleButtonPress = (title) => {
    console.log(`Joined: ${title}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>Sports</Text>
      </View>
      {sportsData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => handleItemPress(item.title)}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.itemButton} onPress={() => handleButtonPress(item.title)}>
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#565F24',
    padding: 20,
    alignItems: 'center',
  },
  categoryTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemContainer: {
    margin: 35,
    width: '80%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  itemButton: {
    backgroundColor: '#565F24',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SportsScreen;
