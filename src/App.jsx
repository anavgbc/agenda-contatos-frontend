import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GlobalReset from "./styles/reset";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <GlobalReset />
      <RoutesMain />
    </>
  );
}

export default App;
