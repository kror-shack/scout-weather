import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Error</h1>
      <p>We are facing some issues, please try again in a while</p>
      <button onClick={() => navigate("/")}>Refresh</button>
    </main>
  );
};

export default ErrorPage;
