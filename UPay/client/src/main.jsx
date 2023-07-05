import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from "./config";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <DAppProvider config={DAPP_CONFIG}>
      <App />
    </DAppProvider>
  </TransactionsProvider>,
  document.getElementById("root"),
);
