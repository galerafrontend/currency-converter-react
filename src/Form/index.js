import CurrencySelect from "./CurrencySelect";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import { Button, ResultText, ResultTitle } from "./styled";
import { useState } from "react";
import { useLoadedCurrencies } from "./useLoadedCurrencies";
import RatesInfo from "./RatesInfo";
import ErrorInfo from "./ErrorInfo";
import LoadingText from "./LoadingText";

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

  if (currencies.status === "succes") {
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
        < RatesInfo
          date={currencies.date}
        />
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
  } else if (currencies.status === "pending") {
    return (
      <form>
        <Header />
        <LoadingText />
      </form>
    )
  } else if (currencies.status === "error") {
    return (
      <form>
        <Header />
        <ErrorInfo />
      </form>
    )
  }
};

export default Form;