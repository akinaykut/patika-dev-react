import axios from "axios";

const getData = async (number) => {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );

  console.log(user);

  console.log("---------------");
  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );
  console.log(posts);

  const array = [user, posts];
  return array;
};

export default getData;
