import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import CurrentRate from "./CurrentRate";
import EnterAmount from "./EnterAmount";
import Header from "./Header";

function App() {
  return (
    <div className="container">
      <form>
        <Header />
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
