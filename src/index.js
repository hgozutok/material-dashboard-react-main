/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.us.fauna.com/graphql",
  headers: {
    //  Authorization: `Bearer Zm5BRWVacFUwdkFBUXd1bzFQVWtHZEFPNWNVanNuQUVJOGo4LUZsUDpGb29kT3JkZXJpbmdBcGk6YWRtaW4=`,
    authorization:
      "Basic Zm5BRWVacFUwdkFBUXd1bzFQVWtHZEFPNWNVanNuQUVJOGo4LUZsUDpGb29kT3JkZXJpbmdBcGk6YWRtaW4=",
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
