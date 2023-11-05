import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import LocationScreen from './LocationScreen';
import HistoryScreen from './HistoryScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
