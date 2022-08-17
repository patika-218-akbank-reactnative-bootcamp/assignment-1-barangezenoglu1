import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const PostContent = ({ postUrl, likes, userName, description }) => {
  return (
    <View>
      <View>
        <Image source={{ uri: postUrl }} style={styles.avatar} />
      </View>
      <View>
        <View style={styles.iconContainer}>
          <View style={styles.leftIcons}>
            <AntDesign
              name="hearto"
              style={{ fontSize: 25, paddingRight: 15 }}
            />
            <Ionicons
              name="chatbubble-outline"
              style={{ fontSize: 25, paddingRight: 15 }}
            />
            <Feather name="send" style={{ fontSize: 25, paddingRight: 15 }} />
          </View>
          <View>
            <MaterialIcons name="save-alt" style={{ fontSize: 25 }} />
          </View>
        </View>

        <Text style={styles.like}>{likes + " likes"}</Text>
        <Text numberOfLines={2} style={styles.description}>
          <Text style={styles.descriptionUserName}>{userName}</Text>
          {"" + description}
        </Text>
      </View>
    </View>
  );
};
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  avatar: {
    height: 260,
    width: windowWidth,
  },
  iconContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftIcons: {
    display: "flex",
    flexDirection: "row",
  },
  like: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: "500",
  },
  descriptionUserName: {
    fontWeight: "500",
  },
  description: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: "300",
  },
});
