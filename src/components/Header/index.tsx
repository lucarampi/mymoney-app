import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";
import { useNewTransactionModal } from "../../Hooks/useNewTransactionModal";


export function Header() {
const {handleOpenNewTransactionModal} = useNewTransactionModal();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="MyMoney App" />
        <button type="button" onClick={handleOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}
