import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import CurrentRate from "./CurrentRate";

function App() {
  return (
    <div className="container">
      <form>
        <h1 className="form__header">Przelicznik walut</h1>
        <CurrencySelect />
        <CurrentRate />
        <label>
          <span className="form__labelText">
            Wpisz kwotę w wybranej walucie*:
          </span>
          <input className="form__field" type="number" name="amount" step="0.01" min="0.01" required autoFocus />
        </label>
        <button className="form__button">Przelicz</button>
        <Result />
      </form>
    </div>
  );
}

export default App;
