import { Container } from "../Summary/styles";
import { useEffect, useState } from "react";
import { useTransactions } from "../../Hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  const [totalColor,setTotalColor] = useState("negative");
  const { transactions } =useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.income += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.outcome += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  useEffect(()=>{
    if (summary.total < 0) {
      setTotalColor("negative");
    } 
    if (summary.total > 0) {
      setTotalColor("positive");
    } 
    if(summary.total === 0){
      setTotalColor("neutral");
    }
  },[summary.total])



  return (
    <Container 
    activeColor={totalColor}
    >
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong> {new Intl.NumberFormat(("pt-BR"),
        { style: "currency", currency: "BRL" }).format(summary.income)}</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>{new Intl.NumberFormat(("pt-BR"),
        { style: "currency", currency: "BRL" }).format(-summary.outcome)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong> {new Intl.NumberFormat(("pt-BR"),
        { style: "currency", currency: "BRL" }).format(summary.total)}</strong>
      </div>
    </Container>
  );
}
