import Modal from "./Modal";
import hideModal from "../../utils/hideModal";
import { useState } from "react";

function NewExpense() {
  const userAccounts = [
    { id: 0, name: "nu" },
    { id: 1, name: "carteira" },
    { id: 2, name: "depósitos" },
  ];

  const userCategories = [
    { id: 0, name: "salário" },
    { id: 1, name: "freelance" },
    { id: 2, name: "investimentos" },
  ];

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
      id="new-expense"
      title="Novo gasto"
      icon="bx:bxs-wallet"
      iconColor={"red"}
      iconWidth={48}
      top
    >
      <form
        className="flex w-96 flex-col gap-7"
        onSubmit={(event) => {
          hideModal("new-income");
          event.preventDefault();
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
            <select
              name="account"
              id="account"
              className="w-full rounded-md border-4 border-primary-200 p-2 text-md dark:border-secondary-200 dark:bg-black"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
            >
              {userAccounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex w-1/2 flex-col">
            <label htmlFor="category">Categoria:</label>
            <select
              name="category"
              id="category"
              className="w-full rounded-md border-4 border-primary-200 p-2 text-md dark:border-secondary-200 dark:bg-black"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {userCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="rounded-sm bg-black/40 p-3 font-bold transition-all duration-200 hover:bg-black/0">
          Adicionar repetição
        </button>

        <button
          className={`flex w-full items-center justify-center rounded-sm bg-primary-200 p-3 font-bold text-white transition-all duration-200 hover:bg-secondary-200 hover:text-black`}
        >
          <p className="text-md">Salvar</p>
        </button>
      </form>
    </Modal>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border-4 border-primary-200 p-2 text-md outline-none dark:border-secondary-200 dark:bg-black dark:text-white"
    />
  );
}

export default NewExpense;
