import react from "react";
import {
  FlatList,
  Text,
  SafeAreaView,
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
        ListHeaderComponentStyle={styles.listHeader}
        data={stories}
        numColumns={stories.length}
        renderItem={singleStory}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "grey",
    borderBottomWidth: 0.9,
    borderTopWidth: 0.9
  },
  story: {
    padding: 10,

    flexDirection: "column",
    alignItems: "center",
  },
  avatarCOntainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});
