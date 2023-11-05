import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

const EditProfileScreen = () => {
  // User data (replace with actual user data)
  const [userData, setUserData] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    password: '********', // You may want to display asterisks for security
    profileImage: require('../assets/user-profile.jpeg'), // Replace with the user's profile image
  });

  // Handlers for editing user data
  const handleUsernameChange = (text) => setUserData({ ...userData, username: text });
  const handleEmailChange = (text) => setUserData({ ...userData, email: text });
  const handlePhoneNumberChange = (text) => setUserData({ ...userData, phoneNumber: text });
  const handlePasswordChange = (text) => setUserData({ ...userData, password: text });

  // Handler for updating user data (you can implement your logic here)
  const handleUpdateProfile = () => {
    // Add logic to update user data here
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          value={userData.username}
          onChangeText={handleUsernameChange}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          value={userData.email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Phone Number"
          value={userData.phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true} // For password input
          value={userData.password}
          onChangeText={handlePasswordChange}
        />
        <View style={styles.buttonContainer}>
          <Button title="Update" onPress={handleUpdateProfile} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
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
  changePhotoText: {
    color: 'blue', // You can style this as a link
  },
  formContainer: {
    width: '80%', // Adjust the width as needed
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10, // Add rounded edges to text fields
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10, // Add rounded edges to the button
    overflow: 'hidden', // Hide content overflow for rounded edges
  },
});

export default EditProfileScreen;
