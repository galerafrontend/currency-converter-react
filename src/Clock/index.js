import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  return (
    <div className="clock">
      <p>
        Dzisiaj jest {currentDate.toLocaleDateString(
          "pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
          }
        )},&nbsp;
        {currentDate.toLocaleTimeString(
          {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
          }
        )}
      </p>
    </div>
  )
};

export default Clock;