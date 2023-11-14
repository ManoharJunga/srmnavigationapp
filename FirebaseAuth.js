// FirebaseAuth.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { auth, firestore, storage } from './FirebaseConfig';

// Function to update user data in Firestore
const updateUserData = async (userId, data) => {
  const userDocRef = doc(firestore, 'users', userId);
  await setDoc(userDocRef, data, { merge: true });
};

// Function to upload user photo to Firebase Storage
const uploadUserPhoto = async (userId, photo) => {
  const storageRef = ref(storage, `user_photos/${userId}`);
  await uploadBytes(storageRef, photo);
};

// Function to handle user sign-up
const handleSignUp = async (email, password, name, phoneNumber, photo) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;

    // Update user details in Firestore
    await updateUserData(user.uid, { name, phoneNumber });

    // Upload user photo to Firebase Storage
    await uploadUserPhoto(user.uid, photo);

    console.log('Signed up with: ', user.email);
    // You may want to navigate to UserDetailsScreen or Home after successful sign-up
    // navigation.navigate('UserDetails');
  } catch (error) {
    alert(error.message);
  }
};

export { handleSignUp, updateUserData, uploadUserPhoto };
