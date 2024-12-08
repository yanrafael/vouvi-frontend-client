import Modal from "./Modal";
import hideModal from "../../utils/hideModal";
import { useState } from "react";

function NewIncome() {
  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [account, setAccount] = useState(0);
  const [category, setCategory] = useState(0);

  const clearForm = () => {
    setTitle("");
    setAmmount(0);
    setDate(new Date().toISOString().split("T")[0]);
    setAccount(0);
    setCategory(0);
  };

  return (
    // TODO Change icon to match figma
    <Modal
      id="new-income"
      title="Novo ganho"
      icon="bx:bxs-dollar-circle"
      iconColor={"green"}
      iconWidth={48}
      top
    >
      <form
        className="flex md:w-96 flex-col gap-7 md:text-md sm:text-[20px] xs:text-[14px] text-[12px]"
        onSubmit={(event) => {
          event.preventDefault();
          hideModal("new-income");
          clearForm();
        }}
      >
        <label htmlFor="income-name">Título:</label>
        <Input
          type="text"
          id="income-name"
          name="income-name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="income-amount">Valor:</label>
            <Input
              type="number"
              id="income-amount"
              name="income-amount"
              value={ammount}
              onChange={(event) => setAmmount(event.target.value)}
              required
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="income-date">Data:</label>
            <Input
              type="date"
              id="income-date"
              name="income-date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="account">Conta/Cartão</label>
            <button
              name="account"
              id="account"
              type="button"
              className="w-full rounded-md sm:border-4 border-[3px] border-primary-200 sm:p-2 p-1 md:text-md sm:text-[20px] dark:border-secondary-200 dark:bg-black"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
            >
              Conta
            </button>
          </div>

          <div className="flex w-1/2 flex-col">
            <label htmlFor="category">Categoria:</label>
            <button
              name="category"
              id="category"
              type="button"
              className="w-full rounded-md sm:border-4 border-[3px] border-primary-200 sm:p-2 p-1 md:text-md sm:text-[20px] dark:border-secondary-200 dark:bg-black"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              Categoria
            </button>
          </div>
        </div>

        <button
          type="button"
          className="rounded-sm bg-black/40 p-3 font-bold transition-all duration-200 hover:bg-black/0 xs:text-[18px] text-[14px]"
        >
          Adicionar repetição
        </button>

        <button
          className={`flex w-full items-center justify-center rounded-sm bg-primary-200 p-3 font-bold text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black`}
        >
          <p className="md:text-md sm:text-[20px] xs:text-[18px] text-[14px]">Salvar</p>
        </button>
      </form>
    </Modal>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md sm:border-4 border-[3px] border-primary-200 sm:p-2 p-1 pl-2 md:text-md sm:text-[20px] outline-none dark:border-secondary-200 dark:bg-black dark:text-white"
    />
  );
}

export default NewIncome;