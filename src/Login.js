import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    Alert.alert('Login Attempted', `Email: ${email}, Password: ${password}`);
  };

  const onPressForgotPassword = () => {
    Alert.alert('Forgot Password', 'Functionality coming soon...');
  };

  const navigation = useNavigation(); 

  const onPressSignUp = () => {
    navigation.navigate('Signup'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

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

      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignUp}>
      <Text style={styles.signUpText}>
        Don't have an account? <Text style={styles.signUpHighlight}>Sign Up</Text>
      </Text>
      </TouchableOpacity>

      <View style={styles.googleLogin1}>
          <View style={styles.loginBtn1}>
            {/* <Icon name="rocket" size={50} color="#900" /> */}
            <Text style={{ color: 'white', fontSize : 15, fontWeight : 700}}>Google</Text> 
          </View>
          <View style={styles.loginBtn1}>
            <Text style={{ color: 'white', fontSize : 15, fontWeight : 700}}>Apple</Text>
          </View>
          <View style={styles.loginBtn1}>
            <Text style={{ color: 'white', fontSize : 15, fontWeight : 700}}>Facebook</Text>
          </View>
      </View>
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
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
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
  loginBtn: {
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
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    color: '#ccc', 
  },
  signUpHighlight: {
    color: '#007bff', 
  },
  googleLogin1: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 60,
  },
  loginBtn1: {
    width: '30%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#333', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
});

export default Login;