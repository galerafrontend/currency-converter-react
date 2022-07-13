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
                <option> {currencies[0].name} - {currencies[0].shortName} </option>
                <option> {currencies[1].name} - {currencies[1].shortName}</option>
                <option> {currencies[2].name} - {currencies[2].shortName}</option>
            </select>
        </label>
    )
};

export default CurrencySelect;