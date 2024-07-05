import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="border-2 border-green-400 rounded m-5 p-4">
      <h1>{user.name}</h1>
      <p>email:{user.email}</p>
      <p>phone: {user.phone}</p>
      <Link to={`${user.id}`}>Show details</Link>
    </div>
  );
};

export default User;
