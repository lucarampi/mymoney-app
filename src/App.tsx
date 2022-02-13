import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider} from "./Hooks/useTransactions";
import { NewTransactionModalProvider } from "./Hooks/useNewTransactionModal";

Modal.setAppElement('#root')

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
