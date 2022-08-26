import { Text, Select } from "./styled";

const CurrencySelect = ({ currencies, currency, setCurrency }) => (
  <label>
    <Text>
      Wybierz walutę:
    </Text>
    <Select
      value={currency}
      onChange={({ target }) => setCurrency(target.value)}
    >
      {Object.keys(currencies.rates).map(currency =>
        <option key={currency} value={currency}>
          {currency}
        </option>
      )}
    </Select>
  </label>
);

export default CurrencySelect;