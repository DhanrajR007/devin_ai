import AppRouter from "./routing/router";
import userProvider from "../src/context/ContextProvider";

const App = () => {
  return (
    <div>
      <userProvider>
        <AppRouter />
      </userProvider>
    </div>
  );
};

export default App;
