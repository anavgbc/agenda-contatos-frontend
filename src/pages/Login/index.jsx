import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import { Container } from "./style";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <FormLogin />
      </Container>
    </>
  );
};

export default Login;
