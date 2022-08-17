import { View, StyleSheet, Image, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export const PostHeader = ({userName, imageUrl}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarAndName}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Entypo name="dots-three-horizontal" style={{ fontSize: 30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    left: 5,
    fontSize: 18,
    fontWeight: "500" 
  },
  avatarAndName: {

    display: "flex",
    flexDirection: "row",
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
