import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import { useDarkMode } from './DarkModeContext';

const settingsData = [
  { id: '1', label: 'Language', icon: 'chevron-forward-outline', screen: 'Language' },
  { id: '2', label: 'My Profile', icon: 'chevron-forward-outline', screen: 'Profile' },
  { id: '3', label: 'Contact Us', icon: 'chevron-forward-outline', screen: 'Contact' },
  { id: '4', label: 'Change Password', icon: 'chevron-forward-outline', screen: 'ChangePassword' },
  { id: '5', label: 'Privacy Policy', icon: 'chevron-forward-outline', screen: 'PrivacyPolicy' },
];

export default function Settings() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.screen)}>
      <Text style={styles.label}>{item.label}</Text>
      <Ionicons name={item.icon} size={20} color={isDarkMode ? "#fff" : "#161622"} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <FlatList
        data={settingsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      /> 
      <ToggleSwitch
        isOn={isDarkMode}
        onColor="green"
        offColor="grey"
        label="Theme"
        labelStyle={{ color: isDarkMode ? '#fff' : '#161622', fontSize: 20, marginRight: 50 }}
        size="large"
        onToggle={toggleDarkMode}
        style={{ marginBottom: 250, flexDirection: 'row', alignItems: 'center' }}
      />
    </View>
  );
}

const getStyles = (darkMode) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode ? '#161622' : '#fff',
    paddingTop: 50,
  },
  text: {
    color: darkMode ? '#fff' : '#000',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginBottom: 70,
    color: darkMode ? '#fff' : '#161622',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 70,
  },
  label: {
    fontSize: 16,
    color: darkMode ? '#fff' : '#161622',
    marginRight: 50,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
});
