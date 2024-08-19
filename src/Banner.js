import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

const Banner = () => {
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const newPage = Math.round(contentOffset / windowWidth);
    setCurrentPage(newPage);
  };

  const navigation = useNavigation(); 

  const onPressRegister = () => {
    navigation.navigate('Signup'); 
  };

  const onPressSignIn = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        <View style={styles.card}>
          <Image source={require('./assets/bImg.jpg')} style={styles.image} />
          <Text style={styles.title}>Effortless Expense Tracking</Text>
          <Text style={styles.description}>
            Capture every penny spent with ease!  Quickly record expenses on the go, categorize them effortlessly, and see a clear picture of your spending habits.
          </Text>
        </View>

        <View style={styles.card}>
          <Image source={require('./assets/bImg1.jpg')} style={styles.image} />
          <Text style={styles.title}>Budgeting Made Simple</Text>
          <Text style={styles.description}>
            Set realistic budgets and track your progress in real-time. Receive helpful alerts if you're nearing your limits, so you can stay in control of your finances.
          </Text>
        </View>

        <View style={styles.card}>
          <Image source={require('./assets/bImg2.jpg')} style={styles.image} />
          <Text style={styles.title}>Insightful Reports & Analytics</Text>
          <Text style={styles.description}>
            Visualize your spending patterns with beautiful charts and graphs. Gain valuable insights to identify areas where you can save and make smarter financial decisions.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.pagination}>
        {[0, 1, 2].map((page) => (
          <View
            key={page}
            style={[
              styles.paginationDot,
              currentPage === page && styles.activePaginationDot,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText} onPress={onPressRegister}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.buttonText} onPress={onPressSignIn}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', 
  },
  card: {
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    width: '95%',
    textAlign: 'center',
    lineHeight: 29,
    color: '#AAAAAA', 
    marginTop: 14,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activePaginationDot: {
    backgroundColor: '#007bff', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    position: 'absolute',
    bottom: 80, 
    width: '100%',
  },
  registerButton: {
    width: 170,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff', 
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  signinButton: {
    width: 170,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333', 
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Banner;