import "./style.css";

const EnterAmount = ({ amount, setAmount }) => {
    return (
        <label>
            <span className="label__text">
                Wpisz kwotę w wybranej walucie*:
            </span>
            <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                className="label__field"
                type="number"
                step="0.01" min="0.01"
                required autoFocus />
        </label>
    )
};

export default EnterAmount;