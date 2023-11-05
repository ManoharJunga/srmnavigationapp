import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


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

export { auth };

const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
}
