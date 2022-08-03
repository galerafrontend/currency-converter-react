import "./style.css";

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
      <button className="form__button">
        Przelicz
      </button>
      <p>
        <span className="formResult__title">Kwota po przeliczeniu w PLN:</span>
        {result !== undefined && (
          <span className="formResult__text"
            hidden={result.amount === undefined}
          >
            {result.amount} {result.currencyName} = {result.finalResult} PLN
          </span>
        )}
      </p>
    </form>
  )
};

export default Form;