import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LoginModal from './components/LoginModal';

const App = () => {
  return (
    <ImageBackground source={require('./assets/images/background-login.png')} style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <LoginModal />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 55,
    textAlign: 'center',
    marginTop: 160,
    fontFamily: 'Roboto',
  },
});

export default App;