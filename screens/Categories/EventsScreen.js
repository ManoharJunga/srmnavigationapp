import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventsScreen = () => {
  const navigation = useNavigation();

  const events = [
    {
      name: 'Event 1',
      description: 'Description for Event 1.',
    },
    {
      name: 'Event 2',
      description: 'Description for Event 2.',
    },
    {
      name: 'Event 3',
      description: 'Description for Event 3.',
    },
    {
      name: 'Event 4',
      description: 'Description for Event 4.',
    },
  ];

  const handleEventPress = (eventName) => {
    console.log(`Pressed: ${eventName}`);
    navigation.navigate('EventDetails', { eventName });
  };

  const handleRegisterEvent = (eventName) => {
    console.log(`Registered: ${eventName}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>Events</Text>
      </View>
      {events.map((event, index) => (
        <TouchableOpacity key={index} style={styles.eventContainer} onPress={() => handleEventPress(event.name)}>
          <Text style={styles.eventName}>{event.name}</Text>
          <Text style={styles.eventDescription}>{event.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.eventButton} onPress={() => handleRegisterEvent(event.name)}>
              <Text style={styles.buttonText}>Register</Text>
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

const eventContainerWidth = '80%'; // Decrease the width to 80%

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
  eventContainer: {
    margin: 35,
    width: eventContainerWidth, // Set the width to 80%
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
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  eventButton: {
    backgroundColor: '#565F24',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EventsScreen;
