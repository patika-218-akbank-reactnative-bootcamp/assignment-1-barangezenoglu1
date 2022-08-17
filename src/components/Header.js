import { SafeAreaView, StyleSheet, Text } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleLineIcons name="camera" style={{ fontSize: 30 }} />
      <Text style={{fontFamily: 'notoserif', fontSize: 25 }}>Instagram</Text>
      <Ionicons name="chatbox-ellipses-outline" style={{ fontSize: 30 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
