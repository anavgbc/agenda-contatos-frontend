import { AuthContextProvider } from "./AuthContext";
import { RegisterContextProvider } from "./RegisterContext";
import { HomePageContextProvider } from "./HomeContext";

const Providers = ({ children }) => {
  return (
    <HomePageContextProvider>
      <RegisterContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </RegisterContextProvider>
    </HomePageContextProvider>
  );
};

export default Providers;
