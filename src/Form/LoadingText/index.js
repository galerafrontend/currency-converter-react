import { LoadingInfo, Spinner } from "./styled";

const LoadingText = () => {
  return (
    <LoadingInfo>
      Loading data from the European Central Bank ... 😁
      <Spinner />
    </LoadingInfo>
  )
};

export default LoadingText;