import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home-screen';
import Settings from './Settings-screen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const { isDarkMode } = useDarkMode();
    const styles = getStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Tab.Navigator
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
        backgroundColor:'#fff',
    },
});
