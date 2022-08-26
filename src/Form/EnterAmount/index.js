import { Text, Input } from "./styled";

const EnterAmount = ({ amount, setAmount }) => {
  return (
    <label>
      <Text>
        Kwota w zł*:
      </Text>
      <Input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        type="number"
        step="0.01" min="0.01"
        required autoFocus
        placeholder="Wpisz kwotę w zł"
      />
    </label>
  )
};

export default EnterAmount;