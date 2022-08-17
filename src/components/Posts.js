import { ScrollView, StyleSheet, Text } from "react-native";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";

export const Posts = () => {
    return (
        <ScrollView>
            <PostHeader />
            <PostContent />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})