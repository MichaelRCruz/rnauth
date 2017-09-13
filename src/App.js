import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FIREBASE_API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID } from 'react-native-dotenv';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class app extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default app;
