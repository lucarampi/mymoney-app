import Modal from "react-modal";
import { FormEvent, useState, useContext } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../Hooks/useTransactions";

import closingImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useNewTransactionModal } from "../../Hooks/useNewTransactionModal";

export function NewTransactionModal() {
  const {handleCloseNewTransactionModal, isOpen} = useNewTransactionModal();
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");

  function resetModalForm() {
    setTitle("");
    setCategory("");
    setValue(0);
    setType("deposit");
  }
  
  async function hadleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      category,
      value,
      type,
    });
    resetModalForm();
    handleCloseNewTransactionModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={hadleCreateNewTransaction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closingImg} alt="Close" />
      </button>

      <Container onSubmit={hadleCreateNewTransaction}>
        <h2>Nova Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          name=""
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="Number"
          placeholder="Valor"
          name=""
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="deposit"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="withdraw"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          name=""
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
