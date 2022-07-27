import CurrencySelect from "./CurrencySelect";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import { useState } from "react";

function App() {
  const currencies = [
    { id: 1, name: "Euro", shortName: "EUR", rate: "4,83" },
    { id: 2, name: "Dolar amerykański", shortName: "USD", rate: "4,82" },
    { id: 3, name: "Funt brytyjski", shortName: "GSP", rate: "5,72" }
  ];

  const [amount, setAmount] = useState("");

  return (
    <Container>
      <Form
        title={<Header />}
        firstLabel={
          <CurrencySelect
            currencies={currencies}
          />}
        secondLabel={
          <EnterAmount
            amount={amount}
            setAmount={setAmount}
          />}
      />
    </Container>
  );
}

export default App;
