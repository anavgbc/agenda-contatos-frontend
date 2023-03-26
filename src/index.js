import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ChakraProvider> */}
      <Providers>
        <App />
      </Providers>
      {/* </ChakraProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
