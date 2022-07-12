import "./style.css";

const CurrencySelect = (props) => {
    return(
    <label>
        <span className="label__text">
            Wybierz walutę:
        </span>
        <select className="label__field">
            <option />
            <option>Euro - EUR</option>
            <option>Dolar amerykański - USD</option>
            <option>Funt brytyjski - GBP</option>
        </select>
    </label>
    )
};

export default CurrencySelect;