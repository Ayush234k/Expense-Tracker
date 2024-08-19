import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Switch, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const Settings = () => {
  const [password, setPassword] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedTimeZone, setSelectedTimeZone] = useState('IST');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [dataPrivacy, setDataPrivacy] = useState('Limited');
  const [budgetAlertsEnabled, setBudgetAlertsEnabled] = useState(false);
  const [biometricAuthEnabled, setBiometricAuthEnabled] = useState(false);
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  // const onSave = () => {
  //   Alert.alert('Settings Saved', 'Your settings have been updated.');
  // };

  const handleChangePassword = () => {
    setChangePasswordModalVisible(false);
    console.log('New password:', newPassword);
  };

  const navigation = useNavigation(); 

  const onSave = () => {
    navigation.navigate('Banner'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity onPress={() => setChangePasswordModalVisible(true)} style={styles.settingRow}>
        <Text style={styles.settingLabel}>Password</Text>
            <TouchableOpacity style={styles.changeButton} onPress={() => setChangePasswordModalVisible(true)}>
                <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Currency</Text>
        <Picker
          dropdownIconColor= '#fff'
          selectedValue={selectedCurrency}
          onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="INR" value="INR" />
        </Picker>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Language</Text>
        <Picker
          dropdownIconColor= '#fff'
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Hindi" value="Hindi" />
        </Picker>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Time Zone</Text>
        <Picker
          dropdownIconColor= '#fff'
          selectedValue={selectedTimeZone}
          onValueChange={(itemValue) => setSelectedTimeZone(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="IST" value="IST" />
          <Picker.Item label="GMT" value="GMT" />
        </Picker>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: "#767577", true: "#1F75FE" }}
          thumbColor={notificationsEnabled ? "#00FFFF" : "#f4f3f4"}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Data Privacy</Text>
        <Picker
          dropdownIconColor= '#fff'
          selectedValue={dataPrivacy}
          onValueChange={(itemValue) => setDataPrivacy(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Limited" value="Limited" />
          <Picker.Item label="Full" value="Full" />
        </Picker>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Budget Alerts</Text>
        <Switch
          value={budgetAlertsEnabled}
          onValueChange={setBudgetAlertsEnabled}
          trackColor={{ false: "#767577", true: "#1F75FE" }}
          thumbColor={budgetAlertsEnabled ? "#00FFFF" : "#f4f3f4"}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Biometric Auth</Text>
        <Switch
          value={biometricAuthEnabled}
          onValueChange={setBiometricAuthEnabled}
          trackColor={{ false: "#767577", true: "#1F75FE" }}
          thumbColor={biometricAuthEnabled ? "#00FFFF" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity onPress={onSave} style={styles.saveBtn}>
        <Text style={styles.saveText}>SAVE</Text>
      </TouchableOpacity>

      <Modal
        visible={isChangePasswordModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setChangePasswordModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Change Password</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity onPress={handleChangePassword} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
        marginBottom: 60,
        color: '#fff', 
      },
      inputView: {
        width: '100%',
        backgroundColor: '#333', 
        borderRadius: 25,
        height: 50,
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
      settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 42,
      },
      settingLabel: {
        color: '#fff',
        fontSize: 18,
      },
      picker: {
        height: 50,
        width: 150, 
        color: '#fff',
      },
      settingValue: {
        color: '#007bff',
        fontSize: 16,
      },
      saveBtn: {
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
      saveText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
      },  
      changeButton: {
        width: 100,
        alignItems: 'center',
        backgroundColor: 'white', 
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: 'white', 
      },
      changeButtonText: {
        color: 'black', 
        fontSize: 15,
      },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
        borderRadius: 15,
    },
    modalButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Settings;