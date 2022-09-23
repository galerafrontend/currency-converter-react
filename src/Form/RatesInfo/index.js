import { Info, Link, DateInfo } from "./styled";

const RatesInfo = ({ date }) => (
  <>
    <Info>
      Exchange rates are taken from the&nbsp;
      <Link
        href="https://exchangerate.host" target="_blank" rel="noreferrer">
        European Central Bank.
      </Link>
    </Info>
    <Info>
      Valid for the day:&nbsp; <DateInfo>{date}</DateInfo>
    </Info>
  </>
);

export default RatesInfo;