import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  //   console.log(post);
  const { id, title } = post;

  const handleDetails2 = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="rounded border-2 border-green-300 m-5 p-5">
      <h1>Post id : {id}</h1>
      <h1>Title: {title}</h1>

      <Link to={`/post/${id}`}>Post Details</Link>
      <br />
      <button onClick={handleDetails2}>Show Details 2</button>
    </div>
  );
};

export default Post;
