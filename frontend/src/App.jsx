import AppRouter from "./routing/router";
import { UserProvider } from "./context/ContextProvider";

const App = () => {
  return (
    <div>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
};

export default App;
