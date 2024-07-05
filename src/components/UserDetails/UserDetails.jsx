import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export default UserDetails;
