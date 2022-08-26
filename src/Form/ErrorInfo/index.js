import { ErrorText } from "./styled";

const ErrorInfo = () => {
  return (
    <ErrorText>
      Ups... Coś poszło nie tak.😟 Sprawdź czy masz połączenie z internetem.
      Jeśli tak, to wina leży po naszej stronie.
      Sprobuj ponownie poźniej. 😉
    </ErrorText>
  )
};

export default ErrorInfo;