import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}
type TransactionInput = Omit<Transaction, "id" | "createdAt">;
//--------------------------------------------------------------

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api.get(`transactions`).then((response) => {
      setTransactions(() => {
        return response.data.transactions;
      });
    });
  }, []);

  //request api to create new transaction
  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post(`transactions`, transactionInput);
    const { transaction } = response.data;
    const temp = [...transactions, transaction];
    setTransactions(() => {
      localStorage.setItem("items", JSON.stringify(temp));
      return temp;
    });
  }

  //request api to delete a transaction by id
  async function deleteTransaction(id: number) {
    const response = await api.delete(`/transactions/${id}`);
    const updatedTransactions = response.data;
    setTransactions(() => {
      localStorage.setItem("items", JSON.stringify([...updatedTransactions]));
      return [...updatedTransactions];
    });
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions must be used within a TransactionsProvider"
    );
  }
  return context;
}
