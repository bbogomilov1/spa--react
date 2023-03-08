import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>This is the Home Page</h1>
      <p>
        Go to <Link to="/products">the Products page</Link>
      </p>
    </>
  );
};

export default HomePage;
