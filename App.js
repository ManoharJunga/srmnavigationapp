import React from 'react';
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
import SignUpScreen from './screens/SignUpScreen';
import UserDetailsScreen from './screens/UserDetailsScreen'; // Assuming you have UserDetailsScreen

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
          name="SignUp"
          component={SignUpScreen}
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
        {/* Other screens... */}
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{
            title: 'User Details',
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
        {/* Other screens... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
