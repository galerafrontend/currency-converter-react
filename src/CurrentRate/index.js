import "./style.css";

const CurrentRate = (props) => {
    return (
        <label>
            <span className="label__text">
                Aktualny kurs w PLN:
            </span>
            <input 
            className="label__field" 
            type="number" 
            name="exchangeRate" 
            readOnly />
        </label>
    )
};

export default CurrentRate;