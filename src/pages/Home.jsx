import React from "react";

const Home = ({ data }) => {
  // console.log("🏠 Home received data:", data);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;