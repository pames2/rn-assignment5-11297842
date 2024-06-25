import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDarkMode } from './DarkModeContext';
import Home from './Home-screen';
import Settings from './Settings-screen';

const Tab = createBottomTabNavigator();

export default function NavTabs() {
    const { isDarkMode } = useDarkMode();
    const styles = getStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#0066ff',
                    tabBarInactiveTintColor: isDarkMode ? "#d0d6d1": 'grey',
                    tabBarStyle: {
                        backgroundColor: isDarkMode ? '#161622' : '#fff',
                    },
                    headerStyle: {
                        backgroundColor: isDarkMode ? '#333' : '#fff',
                    },
                    headerTintColor: isDarkMode ? '#fff' : '#000',
                })}
            >
                <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Tab.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
            </Tab.Navigator>
        </View>
    );
};

const getStyles = (darkMode) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkMode ? '#333' : '#fff',
    },
});
