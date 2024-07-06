import { Link } from "react-router-dom";

const Post = ({ post }) => {
  //   const post = useLoaderData();
  console.log(post);
  const { id, title } = post;
  console.log(id);
  return (
    <div className="rounded border-2 border-green-300 m-5 p-5">
      <h1>Post id : {id}</h1>
      <h1>Title: {title}</h1>

      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

export default Post;
