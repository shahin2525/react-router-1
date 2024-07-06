import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();
  const post = useLoaderData();
  const { id, title, body } = post;
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>{body}</h1>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;
