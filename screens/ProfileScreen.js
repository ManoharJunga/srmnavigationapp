import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const ProfileScreen = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to access the navigation prop

  const studentData = {
    name: 'John Doe',
    section: 'CSE - O',
    profileImage: require('../assets/user-profile.jpeg'),
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={studentData.profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{studentData.name}</Text>
        <Text style={styles.section}>{studentData.section}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile')} // Use the navigation prop
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.activites}>
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesHeading}>Activities</Text>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Time Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Clubs Joined</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Workshop</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.activites}>
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesHeading}>Preferences</Text>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Darkmode</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#565F24',
    padding: 10,
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activites:{
    alignItems: "stretch"
  },
  activitiesContainer: {
    marginTop: 10,
  },
  
  activitiesHeading: {
    color: "#565F24",
    fontSize: 16,
    fontWeight: '700',
    padding: 5,
  },
  link: {
    paddingVertical: 10,
  },
  linkText: {
    color: '#000', // Blue color for links
    fontSize: 14,
  },
});

export default ProfileScreen;
