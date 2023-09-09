import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>About screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Back to Home"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;