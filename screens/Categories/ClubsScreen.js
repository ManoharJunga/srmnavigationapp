import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClubsScreen = () => {
  const navigation = useNavigation();

  const data = [
    { 
      title: 'Anime Club', 
      description: 'Explore the world of anime with fellow enthusiasts.',
      buttonText: 'Join Club'
    },
    { 
      title: 'Photography Club', 
      description: 'Capture moments and express your creativity through photography.',
      buttonText: 'Join Club'
    },
    { 
      title: 'Music Club', 
      description: 'Create and enjoy music with like-minded individuals.',
      buttonText: 'Join Club'
    },
    { 
      title: 'Creative Arts Club', 
      description: 'Unleash your artistic talents and engage in various art forms.',
      buttonText: 'Join Club'
    },
    { 
      title: 'Movie Club', 
      description: 'Watch and discuss your favorite movies with a group of movie buffs.',
      buttonText: 'Join Club'
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>Clubs</Text>
      </View>
      {data.map((item, index) => (
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
    </View>
  );
};

const elevationValue = 5; // Android elevation value
const shadowColor = '#000'; // iOS shadow color
const shadowOffset = { width: 0, height: 0 }; // iOS shadow offset
const shadowOpacity = 0.2; // iOS shadow opacity
const shadowRadius = 4; // iOS shadow radius
const itemContainerWidth = '80%'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: itemContainerWidth,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
      },
      android: {
        elevation: elevationValue,
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

export default ClubsScreen;
