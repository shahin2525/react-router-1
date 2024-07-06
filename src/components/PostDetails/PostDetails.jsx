import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  console.log(post);
  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>{body}</h1>
    </div>
  );
};

export default PostDetails;
