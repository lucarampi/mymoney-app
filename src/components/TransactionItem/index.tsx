import trashImg from "../../assets/trash-can.svg";
import { DeleteButton } from "./styles";
import { useTransactions } from "../../Hooks/useTransactions";

interface TransactionProps {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionItem(transaction: TransactionProps) {
  const { id, title, type, value, category, createdAt } = transaction;
  const { deleteTransaction } = useTransactions();
  function handleDeleteItem(id: number) {
    deleteTransaction(id);
  }

  return (
    <tr>
      <td>{title}</td>
      <td className={type}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value)}
      </td>
      <td>{category}</td>
      <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}</td>
      <td>
        <DeleteButton onClick={() => handleDeleteItem(id)}>
          <img src={trashImg} alt="Delete Item" />
        </DeleteButton>
      </td>
    </tr>
  );
}
