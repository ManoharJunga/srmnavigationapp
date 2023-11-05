import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpcomingEventsScreen = () => {
  const navigation = useNavigation();

  const upcomingEvents = [
    {
      name: 'Event 1',
      date: '2023-11-10',
      day: 'Thursday',
      info: 'Description for Event 1. Click to view details.',
    },
    {
      name: 'Event 2',
      date: '2023-11-15',
      day: 'Tuesday',
      info: 'Description for Event 2. Click to view details.',
    },
    {
      name: 'Event 3',
      date: '2023-11-20',
      day: 'Sunday',
      info: 'Description for Event 3. Click to view details.',
    },
    {
      name: 'Event 4',
      date: '2023-11-25',
      day: 'Friday',
      info: 'Description for Event 4. Click to view details.',
    },
  ];

  const handleEventPress = (eventName) => {
    // Navigate to the event details screen when a card is pressed
    navigation.navigate('EventDetails', { eventName });
  };

  return (
    <View style={styles.container}>
      {upcomingEvents.map((event, index) => (
        <TouchableOpacity
          key={index}
          style={styles.eventCard}
          onPress={() => handleEventPress(event.name)}
        >
          <Text style={styles.eventName}>{event.name}</Text>
          <Text style={styles.eventDate}>{event.date}</Text>
          <Text style={styles.eventDay}>{event.day}</Text>
          <Text style={styles.eventInfo}>{event.info}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  eventCard: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    // Add shadow and elevation styles as needed
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: 'gray',
  },
  eventDay: {
    fontSize: 14,
    color: 'gray',
  },
  eventInfo: {
    fontSize: 14,
    color: 'black',
  },
});

export default UpcomingEventsScreen;
