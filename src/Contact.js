import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const navigation = useNavigation(); 
  const onSubmit = () => {
    navigation.navigate('About'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Connect with our team</Text>
        <Text style={styles.subtitle}>
          Facing a challenge? Don't hesitate to connect with us. We're ready to help and will respond as quickly as possible.
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your name"
            placeholderTextColor="#AAAAAA"
            onChangeText={setName}
            value={name}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your email"
            placeholderTextColor="#AAAAAA"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={[styles.inputView, styles.issueInput]}>
          <TextInput
            style={styles.inputText}
            placeholder="Describe your issue"
            placeholderTextColor="#AAAAAA"
            onChangeText={setIssue}
            value={issue}
            multiline
          />
        </View>

        <TouchableOpacity onPress={onSubmit} style={styles.submitBtn}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 50,
    color: '#ccc',
    textAlign: 'center',
  },
  inputView: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 30,
    height: 65,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  issueInput: {
    height: 150,
  },
  inputText: {
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  submitText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Contact;