import "./style.css";

const EnterAmount = (props) => {
    return (
        <label>
            <span className="label__text">
                Wpisz kwotę w wybranej walucie*:
            </span>
            <input 
            className="label__field"
            type="number" 
            name="amount" 
            step="0.01" min="0.01" 
            required autoFocus />
        </label>
    )
};

export default EnterAmount;