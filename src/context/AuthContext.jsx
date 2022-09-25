import { useEffect, useState, createContext, useContext } from 'react';
import { auth } from '../firebase';
import {
	createUserWithEmialAndPassword,
	signInWithEmailAndPassword,
	sighOut,
	onAuthStateChanged,
} from 'firebase/auth';
import React from 'react';

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	// 注册
	const signUp = (email, password) => {
		createUserWithEmialAndPassword(auth, email, password);
	};
	// 登录
	const signIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
	};

	// 退出登录
	const logOut = (email, password) => {
		sighOut(auth);
	};
	return (
		<AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
