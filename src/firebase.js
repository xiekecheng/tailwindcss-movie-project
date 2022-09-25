// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBmkvshTbpd-02twqhsOfPCJ-XgdcqmIsU',
	authDomain: 'netflix-react-773c4.firebaseapp.com',
	projectId: 'netflix-react-773c4',
	storageBucket: 'netflix-react-773c4.appspot.com',
	messagingSenderId: '902361937302',
	appId: '1:902361937302:web:72351e2b55e69be8be99b7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
