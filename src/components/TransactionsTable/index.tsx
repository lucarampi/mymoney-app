import { useNewTransactionModal } from "../../Hooks/useNewTransactionModal";
import { useTransactions } from "../../Hooks/useTransactions";
import { TransactionItem } from "../TransactionItem";
import { Container } from "./styles";


export function TransactionsTable() {
  const {transactions} = useTransactions();
  const {handleOpenNewTransactionModal} = useNewTransactionModal();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            
              {transactions.length > 0 ?
              transactions.map(transaction =>(
                  <TransactionItem key={transaction.id} {...transaction} />
                )) : (<tr><td className="warning-empty" colSpan={4}>Ops... parece que ainda não tem nada aqui... Cadastre uma <strong onClick={handleOpenNewTransactionModal}>nova transação</strong> e veja o que acontece!</td></tr>)}
              
            

            
        </tbody>
      </table>
    </Container>
  );
}
