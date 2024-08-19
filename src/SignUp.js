import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   

  const onPressSignUpp = () => {
    Alert.alert('Sign up Attempted', `Email: ${email}, Password: ${password}`);
  };

  const onPressGoogleSignUp = () => {
    Alert.alert('Google Sign Up...');
  };

  const navigation = useNavigation(); 

  const onPressLogin = () => {
    navigation.navigate('Contact'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.introText}>
        Discover a world of possibilities. Join our community today!
      </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#AAAAAA"
          onChangeText={setName}
          value={name}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          onChangeText={setEmail}   

          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#AAAAAA"   

          onChangeText={setPassword}   

          value={password}
        />
      </View>

      <TouchableOpacity onPress={onPressSignUpp} style={styles.signUpBtn}>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff', 
    },
    introText: {
      color: '#ccc',
      marginBottom: 30,
      textAlign: 'center',
    },
    title: { 
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#fff', 
    },
    inputView: {
      width: '100%',
      backgroundColor: '#333', 
      borderRadius: 30,
      height: 60,
      marginBottom: 20,
      justifyContent: 'center',
      paddingHorizontal: 20,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5, 
    },
    inputText: {
      height: 50,
      color: '#fff',
    },
    forgotPasswordText: { 
      color: '#007bff',
      marginBottom: 20,
    },
    signUpBtn: {
      width: '100%',
      backgroundColor: '#007bff', 
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5, 
    },
    signUpText: {
      color: 'white',
      fontWeight: 'bold',
    },
    googleBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 25,
      height: 50,
      paddingHorizontal: 20,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    googleIcon: {
      marginRight: 10,
    },
    googleText: {
      color: '#333',
      fontWeight: 'bold',
    },
    loginText: {
      marginTop: 20,
      color: '#007bff',
    },
  });

export default SignUp;
