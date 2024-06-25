import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
  const transactions = [
    { iconName: 'logo-apple', name: 'Apple Store', category: 'Entertainment', amount: '-$5.00' },
    { iconName: 'logo-xbox', name: 'Xbox', category: 'Gaming', amount: '-$5.00' },
    { iconName: 'storefront-outline', name: 'Grocery', category: 'Retail', amount: '-$88.00' },
    { iconName: 'download-outline', name: 'Money Transfer', category: 'Transaction', amount: '300' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.welcomeSect}>
        <Image style={styles.profile} source={require('./assets/profile.png')} />
        <View style={styles.nameSect}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.name}>Eric Atsu</Text>
        </View>
        <Ionicons style={styles.search} name="search" size={30} color={'grey'} />
      </View>

      <Image style={styles.card} source={require('./assets/Card.png')} />

      <View style={styles.actionRow}>
        <ActionItem iconName="arrow-up-outline" label="Sent" />
        <ActionItem iconName="arrow-down-outline" label="Receive" />
        <ActionItem iconName="cash-outline" label="Loan" />
        <ActionItem iconName="cloud-upload-outline" label="Topup" />
      </View>

      <View style={styles.transText}>
        <Text style={styles.transaction}>Transaction</Text>
        <Text style={styles.sell}>See All</Text>
      </View>

      <ScrollView>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </ScrollView>
    </View>
  );
}

const ActionItem = React.memo(({ iconName, label }) => (
  <React.Fragment>
    <Ionicons name={iconName} size={30} color={color} />
    <Text style={{ color }}>{label}</Text>
  </React.Fragment>
));

const TransactionItem = React.memo(({ iconName, name, category, amount, isDarkMode }) => (
  <View style={styles.transSect}>
    <View style={styles.iconSect}>
      <Ionicons name={iconName} size={30} color={isDarkMode ? 'white' : 'black'} />
      <View style={styles.nameSect}>
        <Text style={[styles.name, { color: isDarkMode ? 'white' : 'black' }]}>{name}</Text>
        <Text style={[styles.welcomeText, { color: isDarkMode ? 'white' : 'black' }]}>{category}</Text>
      </View>
    </View>
    <Text style={[styles.value, { color: isDarkMode ? 'white' : 'black' }]}>{amount}</Text>
  </View>
));

const getStyles = (darkMode) => {
  const backgroundColor = darkMode ? '#161622' : '#fff';
  const color = darkMode ? '#fff' : '#1e1e2d';
  const welcomeTextColor = darkMode ? '#bbb' : 'grey';
  const borderColor = darkMode ? '#222' : '#f8f8f8';
  const textColor = darkMode ? '#fff' : '#1e1e2d';
  
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
    },
    welcomeSect: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      margin: 10,
      marginTop: 50,
    },
    nameSect: {
      marginLeft: 20,
    },
    welcomeText: {
      fontSize: 12,
      color: welcomeTextColor,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color,
    },
    search: {
      marginLeft: 'auto',
      width: 40,
      height: 40,
    },
    profile: {
      width: 60,
      height: 60,
    },
    card: {
      marginLeft: 13,
      marginTop: 10,
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      marginVertical: 25,
    },
    transText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      marginVertical: 25,
    },
    transaction: {
      fontSize: 20,
      fontWeight: 'bold',
      color,
    },
    sell: {
      fontSize: 17,
      color: '#0066ff',
      fontWeight: 'bold',
    },
    transSect: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      margin: 10,
      marginTop: 1,
      justifyContent: 'space-between',
      backgroundColor,
      borderRadius: 10,
      borderColor,
    },
    value: {
      fontSize: 20,
      fontWeight: 'bold',
      color,
    },
    iconSect: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
