import React from "react";
import { useUser } from "../context/ContextProvider";

const Home = () => {
  const { user } = useUser();
  return (
    <div>
      Home
      {JSON.stringify(user)}
    </div>
  );
};

export default Home;
