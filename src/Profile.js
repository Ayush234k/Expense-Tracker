import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image'
import profilePicture from './assets/f1f.png';

const Profile = () => {
  return (
    <ScrollView style={styles.container}> 
      <View style={styles.profileHeader}>

      {/* <FastImage 
          source={{
            uri: 'https://m.media-amazon.com/images/I/81OcZThCE9L._AC_UF1000,1000_QL80_.jpg',
            priority: FastImage.priority.normal,
          }}
          style={styles.profileImage}
          resizeMode={FastImage.resizeMode.contain} 
          onError={(error) => {
            console.error('Image loading error:', error);
          }}
        />  */}

      <FastImage 
          source={profilePicture} 
          style={styles.profileImage}
          resizeMode={FastImage.resizeMode.contain} 
        //   onError={(error) => {
        //     console.error('Image loading error:', error);
        //   }}
        /> 
        <Text style={styles.userName}>Ayush Singh</Text>
        <Text style={styles.userId}>ID: AU69XM79F3</Text>
      </View>

      <View style={styles.profileItemsContainer}> 
        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.itemIcon}>👤</Text>
          <View style={styles.itemTextContainer}> 
            <Text style={styles.itemText}>User profile</Text>
            <Text style={styles.itemSubtext}>Change profile image, name or password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.itemIcon}>💎</Text>
          <View style={styles.itemTextContainer}> 
            <Text style={styles.itemText}>Premium plans</Text>
            <Text style={styles.itemSubtext}>Explore premium options and enjoy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.itemIcon}>🏦</Text>
          <View style={styles.itemTextContainer}> 
            <Text style={styles.itemText}>Accounts</Text>
            <Text style={styles.itemSubtext}>Manage accounts and description</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.itemIcon}>$</Text>
          <View style={styles.itemTextContainer}> 
            <Text style={styles.itemText}>Currencies</Text>
            <Text style={styles.itemSubtext}>Add other currencies, adjust exchange rates</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.itemIcon}>🧮</Text>
          <View style={styles.itemTextContainer}> 
            <Text style={styles.itemText}>Categories</Text>
            <Text style={styles.itemSubtext}>Manage categories and add sub-categories</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <Text style={styles.itemIcon}>🔒</Text>
          <View style={styles.itemTextContainer}> 
            <Text style={styles.itemText}>Security</Text>
            <Text style={styles.itemSubtext}>Protect your app with PIN or Fingerprint</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', 
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userId: {
    fontSize: 16,
    color: '#AAAAAA',
  },
//   profileItemsContainer: {

//   },
  profileItem: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  itemIcon: {
    fontSize: 24,
    marginRight: 15,
    color: '#fff'
  },
  itemTextContainer: {
    flex: 1, 
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  itemSubtext: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  logoutButton: {
    backgroundColor: '#c0392b', 
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Profile;