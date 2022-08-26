import CurrencySelect from "./CurrencySelect";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import { Button, ResultText, ResultTitle } from "./styled";
import { useState } from "react";
import { useLoadedCurrencies } from "./useLoadedCurrencies";

const Form = () => {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const currencies = useLoadedCurrencies();

  const calculateResult = (amount, currency) => {
    const rate = currencies.rates[currency];
    setResult({
      sourceAmount: amount,
      targetAmount: (amount * rate).toFixed(2),
      currency,
    })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header />
      <CurrencySelect
        currencies={currencies}
        currency={currency}
        setCurrency={setCurrency}
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
          Kwota po przeliczeniu:
        </ResultTitle>
        {result !== undefined && (
          <ResultText
            hidden={result.currency === undefined}
          >
            {result.sourceAmount} PLN = {result.targetAmount} {result.currency}
          </ResultText>
        )}
      </p>
    </form>
  )
};

export default Form;