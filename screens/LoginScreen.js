import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Make sure you have imported your Firebase configuration correctly.
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/Logo.png'; // Make sure the path to your logo image is correct.

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
                navigation.navigate('Home'); // Navigate to the home screen upon successful signup
            })
            .catch(error => alert(error.message));
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email);
                navigation.navigate('Home'); // Navigate to the home screen upon successful login
            })
            .catch(error => alert(error.message));
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
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
            </View>
            <View>
                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.buttonForgot}
                >
                    <Text style={styles.buttonForgotText}>Forgot your password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutLine]}
                >
                    <Text style={styles.buttonOutLineText}>Create a new account</Text>
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
    buttonOutLine: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#565F24',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutLineText: {
        color: '#565F24',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonForgot: {
        color: '#565F24',
        marginRight: 10,
    },
    logoContainer: {
        width: 400, // Set to the actual width of your Logo.png
        height: 100, // Set to the actual height of your Logo.png
    },
    logo: {
        width: '100%',
        height: '100%',
    }
});

export default LoginScreen;
