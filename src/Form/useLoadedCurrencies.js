import axios from "axios";
import { useEffect, useState } from "react";

export const useLoadedCurrencies = () => {
  const [ratesData, setRatesData] = useState({
    status: "pending",
    rates: "",
    date: "",
  });

  useEffect(() => {
    const downloadData = (async () => {
      try {
        const response = await axios.get('https://api.exchangerate.host/latest?base=PLN');

        setRatesData({
          status: "succes",
          rates: response.data.rates,
          date: response.data.date
        });

      } catch (error) {
        setRatesData({
          status: "error"
        });
        console.error(error);
      }
    });

    setTimeout(downloadData, 1000);
  }, []);

  return ratesData;
};