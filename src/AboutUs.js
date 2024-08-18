import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  const navigation = useNavigation();

  const onLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Mission and Vision</Text>
          </View>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              Our mission is to empower individuals to take control of their finances by providing a simple and effective tool to track expenses and achieve financial goals.
            </Text>
          </View>
        </View>

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Core Values</Text>
          </View>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              Transparency, security, and user-friendliness are at the core of our app.
            </Text>
          </View>
        </View>

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Security and Privacy</Text>
          </View>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              We take the security of your financial data seriously. We employ industry-standard encryption and security practices to safeguard your information.
            </Text>
          </View>
        </View>

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
          </View>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              Email: support@yourapp.com{'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.sectionWrapper}>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>App Features</Text>
          </View>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              - Easily categorize expenses{'\n'}
              - Set budgets and track savings{'\n'}
              - Generate insightful reports{'\n'}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={onLogin} style={styles.sBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#222', 
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
  },
  sectionWrapper: {
    marginBottom: 30,
    borderRadius: 10, 
    overflow: 'hidden', 
  },
  sectionTitleWrapper: {
    backgroundColor: '#333', 
    padding: 15,
  },
  sectionContent: {
    backgroundColor: '#282828', 
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionText: {
    fontSize: 16,
    color: '#ccc',
  },
  sBtn: {
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
});

export default AboutUs;