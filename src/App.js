import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import CurrentRate from "./CurrentRate";
import EnterAmount from "./EnterAmount";

function App() {
  return (
    <div className="container">
      <form>
        <h1 className="form__header">Przelicznik walut</h1>
        <CurrencySelect />
        <CurrentRate />
        <EnterAmount />
        <button className="form__button">Przelicz</button>
        <Result />
      </form>
    </div>
  );
}

export default App;
