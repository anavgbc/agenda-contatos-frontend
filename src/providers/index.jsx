import { AuthContextProvider } from "./AuthContext";
import { RegisterContextProvider } from "./RegisterContext";
import { HomePageContextProvider } from "./HomeContext";
import { ModalContextProvider } from "./ModalContext";

const Providers = ({ children }) => {
  return (
    <ModalContextProvider>
      <HomePageContextProvider>
        <RegisterContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </RegisterContextProvider>
      </HomePageContextProvider>
    </ModalContextProvider>
  );
};

export default Providers;
