import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteSpace}></View>
      <Text style={styles.title}>Create Account</Text>
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

      <TouchableOpacity onPress={onPressLogin} style={styles.loginText}>
        <Text style={styles.loginText1}>Already have an account?</Text>
        <Text style={styles.loginText2}>Login</Text>
      </TouchableOpacity>

      <View style={styles.googleLogin}>
          <View style={styles.loginBtn}>
            {/* <Icon name="rocket" size={50} color="#900" /> */}
            <Text style={{ color: 'white', fontSize : 15, fontWeight : 700}}>Google</Text> 
          </View>
          <View style={styles.loginBtn}>
            <Text style={{ color: 'white', fontSize : 15, fontWeight : 700}}>Apple</Text>
          </View>
          <View style={styles.loginBtn}>
            <Text style={{ color: 'white', fontSize : 15, fontWeight : 700}}>Facebook</Text>
          </View>
      </View>
      <View style={styles.terms}></View>
      <Text style={styles.termsText}>By clicking Create Account you agree to our Terms of use and Privacy policy.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#222', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    whiteSpace:{
      height: 90,
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
    loginText: {
      flexDirection: 'row',
    },
    loginText1: {
      marginTop: 20,
      color: '#ccc',
    },
    loginText2: {
      marginTop: 20,
      color: '#007bff',
      marginLeft: 6,
    },
    googleLogin: {
      width: '100%',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 60,
    },
    loginBtn: {
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
    termsText:{
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 130,
    }
  });

export default SignUp;
