import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        // Uncomment the following lines to seed the database with transactions
        // {
        //   id: 0,
        //   createdAt: new Date("2022-02-10 22:00:00"),
        //   title: "Freelance de Website",
        //   value: 2000,
        //   type: "deposit",
        //   category: "Dev",
        // },
        // {
        //   id: 1,
        //   createdAt: new Date("2022-02-06 14:00:00"),
        //   title: "Aluguel",
        //   value: 860,
        //   type: "withdraw",
        //   category: "Casa",
        // },
      ],
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
      schema.db.transactions.remove({id:id})
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
