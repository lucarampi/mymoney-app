import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

function getStoredData(){
  const data = localStorage.getItem("items")
  if (!data) return []
  return [...JSON.parse(data)]
}

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: getStoredData(),
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", { ...data, createdAt: new Date() });
    });

    this.delete("/transactions/:id", (schema, request) => {
      const id = request.params.id;
      schema.db.transactions.remove({ id: id });
      return schema.db.transactions;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
