import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Login';
import SignUp from './src/SignUp';
import Contact from './src/Contact';
import AboutUs from './src/AboutUs';
// import Dashboard from './src/Dashboard';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="About" component={AboutUs} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;