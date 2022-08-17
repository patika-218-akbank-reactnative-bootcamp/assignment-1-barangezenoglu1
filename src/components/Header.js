import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import InstagramLogo from "../assets/instagram.png";

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleLineIcons name="camera" style={{ fontSize: 30 }} />
      <Image source={InstagramLogo} style={styles.logo} />
      <Ionicons name="chatbox-ellipses-outline" style={{ fontSize: 30 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
});
