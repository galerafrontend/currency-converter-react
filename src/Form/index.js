import { Button, ResultText, ResultTitle } from "./styled";

const Form = ({
  currencies,
  calculateResult,
  result,
  title,
  fieldSelect,
  amountField,
  amount,
  currencyName,
  setCurrencyName }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currencyName);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {title}
      {fieldSelect}
      {amountField}
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