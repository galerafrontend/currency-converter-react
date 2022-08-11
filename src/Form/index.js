import CurrencySelect from "./CurrencySelect";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import { Button, ResultText, ResultTitle } from "./styled";
import { useState } from "react";
import { currencies } from "./currencies";

const Form = () => {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [currencyName, setCurrencyName] = useState("");

  const calculateResult = (amount, currencyName) => {
    const rate = currencies.find(({ shortName }) => shortName === currencyName).rate;
    setResult({ finalResult: (amount * rate).toFixed(2), currencyName, amount })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currencyName);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header />
      <CurrencySelect
        currencies={currencies}
        currencyName={currencyName}
        setCurrencyName={setCurrencyName}
      />
      <EnterAmount
        amount={amount}
        setAmount={setAmount}
      />
      <Button>
        Przelicz
      </Button>
      <p>
        <ResultTitle>
          Kwota po przeliczeniu w PLN:
        </ResultTitle>
        {result !== undefined && (
          <ResultText
            hidden={result.amount === undefined}
          >
            {result.amount} {result.currencyName} = {result.finalResult} PLN
          </ResultText>
        )}
      </p>
    </form>
  )
};

export default Form;