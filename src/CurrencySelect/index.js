import "./style.css";

const CurrencySelect = ({ currencies }) => (
    <label>
        <span className="label__text">
            Wybierz walutę:
        </span>
        <select className="label__field">
            <option />
            {currencies.map(currency => (
                <option key={currency.id}>
                    {currency.name} - {currency.shortName}
                </option>
            ))}
        </select>
    </label>
);

export default CurrencySelect;