import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import NavTabs from './NavTabs.js';

export default function App() {
  return (
    <DarkModeProvider>
    <NavigationContainer>
      <NavTabs />
      <StatusBarManager />
    </NavigationContainer>
    </DarkModeProvider>
  );
}

function StatusBarManager() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <StatusBar style={isDarkMode ? 'light' : 'dark'} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
