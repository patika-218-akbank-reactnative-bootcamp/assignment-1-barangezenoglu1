import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Posts } from './src/components/Posts';
import { Stories } from './src/components/Stories';

export default function App() {
  return (
    <View>
      <Header />
      <Stories />
      <Posts />
    </View>
  );
}


