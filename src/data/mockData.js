const createStoryUser = (number) => {
  let stories = [];
  for (let i = 1; i < number; i++) {
    let story = {
      id: i,
      name: `User${i}`,
      image: `https://xsgames.co/randomusers/assets/avatars/male/${i}.jpg`,
    };
    stories.push(story);
  }
  return stories;
};

export const storiesData = createStoryUser(20);

const createPostData = (number) => {
  let postData = [];
  for (let i = 1; i < number; i++) {
    let post = {
      userName: `User${i}`,
      imageUrl: `https://xsgames.co/randomusers/assets/avatars/male/${i}.jpg`,
      postUrl: "https://picsum.photos/id/1/200/300",
      likes: Math.floor(Math.random() * (5000 - 1000 + 1) + 1000).toString(),
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
    postData.push(post);
  }
  return postData;
};

export const postData = createPostData(10);
