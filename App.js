import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Stories } from './src/components/Stories';

export default function App() {
  return (
    <View>
      <Header />
      <Stories />
    </View>
  );
}


