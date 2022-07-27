import "./style.css";

const Form = ({ title, firstLabel, secondLabel, resultText }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
            {title}
            {firstLabel}
            {secondLabel}
            <button className="form__button">
                Przelicz
            </button>
            {resultText}
        </form>
    )
};

export default Form;