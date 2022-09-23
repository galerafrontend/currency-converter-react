import { useCurrentDate } from "./useCurrentDate";
import { Time } from "./styled";

const formattedDate = (date) => date.toLocaleDateString(
  "en", {
  weekday: "long",
  day: "numeric",
  month: "long",
}
);

const formattedTime = (date) => date.toLocaleTimeString(
  "en", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}
);

const Clock = () => {
  const date = useCurrentDate();

  return (
    <Time>
      Today is
      {" "}
      {formattedDate(date)},&nbsp;{formattedTime(date)}
    </Time>
  )
};

export default Clock;