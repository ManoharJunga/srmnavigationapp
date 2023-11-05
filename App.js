
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UpcomingEventsScreen from './screens/UpcomingEventsScreen';
import SearchScreen from './screens/SearchScreen';
import LocationScreen from './screens/LocationScreen';
import HistoryScreen from './screens/HistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ClubsScreen from './screens/Categories/ClubsScreen';
import EventsScreen from './screens/Categories/EventsScreen';
import SportsScreen from './screens/Categories/SportsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{
            title: 'Location',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: 'History',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="UpcomingEvents"
          component={UpcomingEventsScreen}
          options={{
            title: 'Upcoming Events',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Clubs" component={ClubsScreen} options={{
            title: 'Clubs',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
<Stack.Screen name="Events" component={EventsScreen} options={{
            title: 'Events',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
<Stack.Screen name="Sports" component={SportsScreen} options={{
            title: 'Sports',
            headerStyle: {
              backgroundColor: '#565F24',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
