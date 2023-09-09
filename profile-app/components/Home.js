import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNetInfo } from '@react-native-community/netinfo'

const Home = ({ navigation }) => {

  const netInfo = useNetInfo()

  return (
    <View style={styles.center}>
      <Text>Home screen</Text>
      <Ionicons name="home" size="32" />
      <Button
        onPress={() => navigation.navigate('About')}
        title="Back to About Scr"></Button>

      <Text>Connection Status</Text>
      <View style={{
        marginTop: 20,
        width: 50,
        height: 50,
        backgroundColor: netInfo.isConnected ? 'green' : 'red',
      }} />
      <Pressable style={styles.btnPress} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.text}>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  btnPress: {
    backgroundColor: '#CCCCFF',
    borderColor: '#5e499e',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
});

export default Home;