import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const EmailInput = ({ value, onChange }) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="E-mail"
        value={value}
        onChangeText={onChange}
        style={styles.textInput}
      />
    </View>
  );
}

const PasswordInput = ({ value, onChange }) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Password"
        value={value}
        onChangeText={onChange}
        secureTextEntry
        style={styles.textInput}
      />
    </View>
  );
}

const SignUpButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.singupButton} onPress={onPress}>
      <Text>SignUp</Text>
    </TouchableOpacity>
  );
}

const LoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic
    console.log('Sign Up:', { email, password });
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/clients', {
        email: email,
        password: password,
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={styles.modal}>
      <EmailInput value={email} onChange={setEmail} />
      <PasswordInput value={password} onChange={setPassword} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <SignUpButton onPress={handleSignUp} />
        <LoginButton onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 55,
    textAlign: 'center',
    marginTop: 160,
    fontFamily: 'Roboto',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    width: '100%',
    height: 300,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    borderRadius: 6,
  },
  textInput: {
    height: '100%',
    width: '100%',
  },
  singupButton: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '48%',
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '48%',
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginModal;