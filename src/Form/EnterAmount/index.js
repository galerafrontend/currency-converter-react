import { Text, Input } from "./styled";

const EnterAmount = ({ amount, setAmount }) => {
  return (
    <label>
      <Text>
        Wpisz kwotę w wybranej walucie*:
      </Text>
      <Input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        type="number"
        step="0.01" min="0.01"
        required autoFocus />
    </label>
  )
};

export default EnterAmount;