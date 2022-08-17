import { View, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { Stories } from "../components/Stories";
import { Posts } from "../components/Posts";
import { BottomTab } from "../components/BottomTab";
import { storiesData, postData } from "../data/mockData";

export const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Stories stories={storiesData} />
      <ScrollView>
        <Posts postData={postData} />
      </ScrollView>
      <BottomTab />
    </View>
  );
};
