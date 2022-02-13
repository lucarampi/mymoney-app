import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider} from "./Hooks/useTransactions";
import { NewTransactionModalProvider } from "./Hooks/useNewTransactionModal";

Modal.setAppElement('#root')

const Title = styled.h1`
  color: #8257e6;
  fonsize: 32px;
`;

export function App() {
  return (
    <TransactionsProvider>
      <NewTransactionModalProvider>
    <NewTransactionModal/>
      <Header/>
      <Dashboard />
      </NewTransactionModalProvider>

      <GlobalStyle />
    </TransactionsProvider>
  );
}
