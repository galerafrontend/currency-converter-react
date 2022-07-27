import "./style.css";

const Form = ({ title, firstLabel, secondLabel}) => {

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
            <p>
                <span className="formResult__title">Kwota po przeliczeniu:</span>
                <span className="formResult__text" ></span>
            </p>
        </form>
    )
};

export default Form;