import "./style.css";

const Form = ({ currencies, calculateResult, result, title, firstLabel, secondLabel, amount, currencyName, setCurrencyName }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currencyName);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {title}
      {firstLabel}
      {secondLabel}
      <button className="form__button">
        Przelicz
      </button>
      <p>
        <span className="formResult__title">Kwota po przeliczeniu:</span>
        {result !== undefined && (
          <span className={
            `formResult__text
            ${result ? "" : "formResult__text--hidden"}`
          }>
            {result.amount} {result.currencyName} = {result.finalResult} PLN
          </span>
        )}
      </p>
    </form>
  )
};

export default Form;