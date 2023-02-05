import { AuthContextProvider } from "./AuthContext";
import { RegisterContextProvider } from "./RegisterContext";

const Providers = ({ children }) => {
  return (
    // <ModalContextProvider>
    <RegisterContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </RegisterContextProvider>
    // </ModalContextProvider>
  );
};

export default Providers;
