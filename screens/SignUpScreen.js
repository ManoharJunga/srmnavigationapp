import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Make sure you have imported your Firebase configuration correctly.
import { useNavigation } from '@react-navigation/native';

const logo = require('../assets/Logo.png');

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenteredPassword, setReenteredPassword] = useState(''); // New state for re-entered password

    const navigation = useNavigation();

    const handleSignUp = () => {
        if (password === reenteredPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log('Signed up with: ', user.email);
                    navigation.navigate('Home'); // Navigate to the home screen upon successful signup
                })
                .catch(error => alert(error.message));
        } else {
            alert("Passwords do not match. Please re-enter your password.");
        }
    };

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder='Re-enter Password' // Added re-enter password input
                    value={reenteredPassword}
                    onChangeText={text => setReenteredPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={goToLogin}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        padding: 10,
        margin: 40,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#565F24',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    loginText: {
        color: '#565F24',
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 5,
    },
    logoContainer: {
        alignItems: "center",
        width: 400, // Set to the actual width of your Logo.png
        height: 100, // Set to the actual height of your Logo.png
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default SignUpScreen;
