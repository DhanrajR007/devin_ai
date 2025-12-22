import { createContext, useState } from "react";

const ContextProvider = createContext();
const userProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <ContextProvider value={{ user, setUser }}>{children}</ContextProvider>
  );
};
export default userProvider;
