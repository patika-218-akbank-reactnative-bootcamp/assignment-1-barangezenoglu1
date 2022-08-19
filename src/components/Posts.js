import React from "react";
import { View } from "react-native";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";

export const Posts = ({ postData }) => {
  return postData.map((post, index) => {
    return (
      <View key={index}>
        <PostHeader userName={post.userName} imageUrl={post.imageUrl} />
        <PostContent
          postUrl={post.postUrl}
          likes={post.likes}
          userName={post.userName}
          description={post.description}
        />
      </View>
    );
  });
};
