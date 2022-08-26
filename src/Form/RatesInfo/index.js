import { Info, Link, DateInfo } from "./styled";

const RatesInfo = ({ date }) => (
  <>
    <Info>
      Kursy walut pobrane są z&nbsp;
      <Link 
        href="https://exchangerate.host">
          Europejskiego Banku Centralnego.
      </Link>
    </Info>
    <Info>
      Atkualne na dzień:&nbsp; <DateInfo>{date}</DateInfo>
    </Info>
  </>
);

export default RatesInfo;