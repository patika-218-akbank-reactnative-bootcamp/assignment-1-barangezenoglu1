import { StyleSheet, View } from "react-native"
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export const BottomTab = () => {
    return (
        <View style={styles.container}>
            <Octicons name="home" style={{ fontSize: 35, paddingRight: 10 }} />
            <AntDesign name="search1" style={{ fontSize: 35, paddingRight: 10 }} />
            <Octicons name="diff-added" style={{ fontSize: 35, paddingRight: 10 }} />
            <AntDesign name="hearto" style={{ fontSize: 35, paddingRight: 10 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        paddingLeft: 15,
        paddingTop: 3,
        paddingBottom: 3,
        borderTopWidth: 0.9,
        borderColor: 'grey',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})