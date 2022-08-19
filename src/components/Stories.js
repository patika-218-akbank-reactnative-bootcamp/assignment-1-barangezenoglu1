import React from "react";
import {
  FlatList,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
} from "react-native";

export const Stories = ({ stories }) => {
  const singleStory = ({ item }) => {
    return (
      <View style={styles.story}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.image }} style={styles.avatar} />
        </View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={singleStory}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#C3BEBE",
    borderTopWidth: 0.9,
  },
  story: {
    padding: 10,
    alignItems: "center",
  },
  avatarContainer: {
    height: 60,
    width: 63,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});
