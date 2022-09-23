import { Text, Input } from "./styled";

const EnterAmount = ({ amount, setAmount }) => {
  return (
    <label>
      <Text>
        Amount in PLN*:
      </Text>
      <Input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        type="number"
        step="0.01" min="0.01"
        required autoFocus
        placeholder="Enter amount in PLN"
      />
    </label>
  )
};

export default EnterAmount;