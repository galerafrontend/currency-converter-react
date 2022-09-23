import { ErrorText } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

const ErrorInfo = () => {
  return (
    <ErrorText>
      <WarningIcon />
      Oops... Something went wrong.<br />
      Check if you are connected to the internet.
      If so, we are at fault.
      Please&nbsp;try again later.😉
    </ErrorText>
  )
};

export default ErrorInfo;