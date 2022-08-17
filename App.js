import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomTab } from './src/components/BottomTab';
import { Header } from './src/components/Header';
import { Posts } from './src/components/Posts';
import { Stories } from './src/components/Stories';
import { storiesData } from './src/data/mockData';
import { postData } from './src/data/mockData';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Stories stories={storiesData} />
      <ScrollView>
      <Posts postData={postData} />
      </ScrollView>
      <BottomTab />
    </View>
  );
}


