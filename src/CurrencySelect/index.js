import "./style.css";

const CurrencySelect = ({ currencies, currencyName, setCurrencyName }) => (
  <label>
    <span className="label__text">
      Wybierz walutę:
    </span>
    <select className="label__field"
      value={currencyName}
      onChange={({ target }) => setCurrencyName(target.value)}
    >
      <option />
      {currencies.map(currency => (
        <option key={currency.name} value={currency.shortName}>
          {currency.name} - {currency.shortName}
        </option>
      ))}
    </select>
  </label>
);

export default CurrencySelect;