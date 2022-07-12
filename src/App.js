import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import CurrentRate from "./CurrentRate";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <Form
        title={<Header />}
        firstLabel={<CurrencySelect />}
        secondLabel={<CurrentRate />}
        thirdLabel={<EnterAmount />}
        resultText={<Result />}
      />
    </div>
  );
}

export default App;
