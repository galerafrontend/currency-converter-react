import { useEffect, useState } from "react";
import { Date } from "./styled";

const formattedDate = (date) => date.toLocaleDateString(
  undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
}
);

const formattedTime = (date) => date.toLocaleTimeString(
  undefined, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}
);

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  return (
    <Date>
      Dzisiaj jest
      {" "}
      {formattedDate(date)},&nbsp;{formattedTime(date)}
    </Date>
  )
};

export default Clock;