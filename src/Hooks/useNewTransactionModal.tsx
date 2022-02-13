import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface NewTransactionModalContextData {
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
  isOpen: boolean;
}

const NewTransactionModalContext = createContext<NewTransactionModalContextData>(
  {} as NewTransactionModalContextData
);

export function NewTransactionModalProvider({ children }: ModalProviderProps) {

  //handle modal state
  const [isOpen, setIsOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsOpen(false);
  }

  return (
    <NewTransactionModalContext.Provider
      value={{
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
        isOpen,
      }}
    >
      {children}
    </NewTransactionModalContext.Provider>
  );
}

export function useNewTransactionModal() {
  const context = useContext(NewTransactionModalContext);
  if (!context) {
    throw new Error(
      "useNewTransactionModal must be used within a NewTransactionModalProvider"
    );
  }
  return context;
}
