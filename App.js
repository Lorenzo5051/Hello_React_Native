import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome,{flex:5, backgroundColor:'white'}]}>Hello React Native</Text>
      <Text style={[styles.welcome,{flex:4,backgroundColor:'pink'}]}>Hello React Native</Text>
      <Text style={[styles.welcome,{flex:3,backgroundColor:'orange'}]}>Hello React Native</Text>
      <Text style={[styles.welcome,{flex:2,backgroundColor:'red'}]}>Hello React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //alignItems: 'stretch',
    backgroundColor:'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
