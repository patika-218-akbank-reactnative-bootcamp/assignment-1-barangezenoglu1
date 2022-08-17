import react from "react";
import {
  FlatList,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
} from "react-native";

export const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Baran",
      image: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      id: 2,
      name: "Ali",
      image: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      id: 3,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
    {
      id: 4,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
    {
      id: 5,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
    {
      id: 6,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
    {
      id: 7,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
    {
      id: 8,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
    {
      id: 9,
      name: "Name",
      image: "https://xsgames.co/randomusers/avatar.php?g=pixel ",
    },
  ];

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
        data={stories}
        renderItem={singleStory}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "grey",
    borderBottomWidth: 0.9,
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
