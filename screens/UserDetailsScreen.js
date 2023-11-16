import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth, updateUserData, uploadUserPhoto } from '../firebase';

const UserDetailsScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photo, setPhoto] = useState(null);

    const handlePhotoUpload = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access media library denied');
                return;
            }
    
            const options = {
                title: 'Select Photo',
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
                mediaTypes: ImagePicker.MediaTypeOptions.Images, // Set mediaTypes option to Images
                quality: 1, // Set the quality of the picked image
            };
    
            const result = await ImagePicker.launchImageLibraryAsync(options);
    
            if (!result.canceled && result.assets.length > 0) {
                const selectedImage = result.assets[0]; // Access the selected image from the assets array
                setPhoto({ uri: selectedImage.uri }); // Set the photo using the URI
            }
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };
    const handleSaveDetails = async () => {
        try {
            if (!photo) {
                alert('Please upload a photo.');
                return;
            }

            if (!name || !phoneNumber) {
                alert('Please enter your name and phone number.');
                return;
            }

            // Simple phone number format validation (10 digits)
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phoneNumber)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            // Upload user photo to Firebase Storage
            await uploadUserPhoto(auth.currentUser.uid, photo);

            // Update user details in Firestore
            await updateUserData(auth.currentUser.uid, { name, phoneNumber });

            // Navigate to HomeScreen after saving user details
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    return (
        <View style={styles.container}>
            {photo && (
                <Image source={{ uri: photo.uri }} style={styles.previewImage} resizeMode="cover" />
            )}

            <Text>Upload Photo</Text>
            <TouchableOpacity onPress={handlePhotoUpload} style={styles.button}>
                <Text style={styles.buttonText}>Select Photo</Text>
            </TouchableOpacity>

            <Text>Enter Your Details</Text>
            <TextInput
                placeholder='Name'
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Phone Number'
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                style={styles.input}
                keyboardType="numeric"
            />

            <TouchableOpacity onPress={handleSaveDetails} style={styles.button}>
                <Text style={styles.buttonText}>Save Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        width: '80%',
    },
    button: {
        backgroundColor: '#565F24',
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    previewImage: {
        width: 200,
        height: 200,
        marginBottom: 10, // Adjusted margin to separate the image from the text
        borderRadius: 100,
    },
});

export default UserDetailsScreen;
