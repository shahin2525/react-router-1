import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  //   console.error(error.status, error.statusText);
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.status === 404 && (
        <div>
          <h1>
            <span className="mr-2">{error.status}</span>
            <span>{error.statusText}</span>
          </h1>
          <button onClick={handleGoHome}>Go home </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
