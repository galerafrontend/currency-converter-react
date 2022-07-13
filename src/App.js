import Result from "./Result";
import CurrencySelect from "./CurrencySelect";
import CurrentRate from "./CurrentRate";
import EnterAmount from "./EnterAmount";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";



function App() {
  const currencies = [
    { id: 1, name: "Euro", shortName: "EUR", rate: "4,83" },
    { id: 2, name: "Dolar amerykański", shortName: "USD", rate: "4,82" },
    { id: 3, name: "Funt brytyjski", shortName: "GSP", rate: "5,72" }
  ];


  return (
    <Container>
      <Form
        title={<Header />}
        firstLabel={
        <CurrencySelect 
        currencies={currencies}
        />}
        secondLabel={
        <CurrentRate />}
        thirdLabel={<EnterAmount />}
        resultText={<Result />}
      />
    </Container>
  );
}

export default App;
