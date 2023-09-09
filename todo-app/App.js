import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35
  }
});
