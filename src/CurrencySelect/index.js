import { useState } from "react";
import "./style.css";

const CurrencySelect = ({ currencies }) => {

    const [currencyName, setCurrencyName] = useState("");

    return (
        <label>
            <span className="label__text">
                Wybierz walutę:
            </span>
            <select
                value={currencyName}
                onChange={({target}) => setCurrencyName(target.value)}
                className="label__field">
                <option />
                <option> {currencies[0].name} </option>
                <option> {currencies[1].name} </option>
                <option> {currencies[2].name} </option>
            </select>
        </label>
    )
};

export default CurrencySelect;