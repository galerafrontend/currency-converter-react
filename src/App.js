import CurrencySelect from "./CurrencySelect";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import { useState } from "react";
import Clock from "./Clock";

function App() {
  const currencies = [
    { id: 1, name: "Euro", shortName: "EUR", rate: 4.83 },
    { id: 2, name: "Dolar amerykański", shortName: "USD", rate: 4.82 },
    { id: 3, name: "Funt brytyjski", shortName: "GSP", rate: 5.72 }
  ];

  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyName, setCurrencyName] = useState("");

  const calculateResult = (amount, currencyName) => {
    const rate = currencies.find(({ shortName }) => shortName === currencyName).rate;
    setResult({ finalResult: (amount * rate).toFixed(2), currencyName, amount })
  };

  return (
    <Container>
      <Clock />
      <Form
        currencies={currencies}
        calculateResult={calculateResult}
        result={result}
        amount={amount}
        currencyName={currencyName}
        setCurrencyName={setCurrencyName}
        title={<Header />}
        fieldSelect={
          <CurrencySelect
            currencies={currencies}
            currencyName={currencyName}
            setCurrencyName={setCurrencyName}
          />}
        amountField={
          <EnterAmount
            amount={amount}
            setAmount={setAmount}
          />}
      />
    </Container>
  );
}

export default App;
