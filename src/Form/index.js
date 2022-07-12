import "./style.css";

const Form = ({ title, firstLabel, secondLabel, thirdLabel, resultText }) => {
    return (
        <form>
            {title}
            {firstLabel}
            {secondLabel}
            {thirdLabel}
            <button className="form__button">
                Przelicz
            </button>
            {resultText}
        </form>
    )
};

export default Form;