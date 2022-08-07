import { Text, Select } from "./styled";

const CurrencySelect = ({ currencies, currencyName, setCurrencyName }) => (
  <label>
    <Text>
      Wybierz walutę:
    </Text>
    <Select
      value={currencyName}
      onChange={({ target }) => setCurrencyName(target.value)}
    >
      <option />
      {currencies.map(currency => (
        <option key={currency.name} value={currency.shortName}>
          {currency.name} - {currency.shortName}
        </option>
      ))}
    </Select>
  </label>
);

export default CurrencySelect;