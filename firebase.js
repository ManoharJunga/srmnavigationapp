import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDQtefNAHDmUYt6vIT7vydNP4VZD90aQcM",
  authDomain: "navigation-app-6db80.firebaseapp.com",
  projectId: "navigation-app-6db80",
  storageBucket: "navigation-app-6db80.appspot.com",
  messagingSenderId: "124527889330",
  appId: "1:124527889330:web:92749a0d6cd8d98761f2ab",
  measurementId: "G-QDC8K5FV4B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

// Function to update user data in Firestore
const updateUserData = async (userId, data) => {
    const firestore = getFirestore(app);
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

export { auth, handleSignUp, updateUserData, uploadUserPhoto };
