import "./style.css";

const Form = ({ title, firstLabel, secondLabel, thirdLabel, resultText }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
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