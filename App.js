import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <LinearGradient
      // colors={['#000428' ,'#004e92']} 
      colors={['#1488CC' ,'#2B32B2']} 
      style={styles.box}
    >
      <Text style={{
        fontSize: 16,
        color: 'white'
      }}>⭐Coding Party FoodRecognition App!⭐</Text>
    </LinearGradient>
    <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
