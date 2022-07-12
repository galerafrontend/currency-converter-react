import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import CurrentRate from "./CurrentRate";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Form
        title={<Header />}
        firstLabel={<CurrencySelect />}
        secondLabel={<CurrentRate />}
        thirdLabel={<EnterAmount />}
        resultText={<Result />}
      />
    </Container>
  );
}

export default App;
