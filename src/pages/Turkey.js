import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Skeleton from "react-loading-skeleton";

const Turkey = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [totalData, setTotalData] = useState([{}]);
  const [dailyData, setDailyData] = useState([{}]);
  const fetchDayData = async (dateInput) => {
    // getDailyReportByCountryName API
    const fetchURL = `https://covid-19-data.p.rapidapi.com/report/country/name?name=Turkey&date=${dateInput}`;
    const response = await fetch(fetchURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8", // insert API key
      },
    });
    const parsedData = await response.json();
    return parsedData;

    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
  };
  const fetchTotalData = async () => {
    // getLatestCountryDataByName
    const fetchURL = "https://covid-19-data.p.rapidapi.com/country?name=turkey";
    const response = await fetch(fetchURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
      },
    });
    const parsedData = await response.json();
    return parsedData;
  };

  useEffect(() => {
    fetchTotalData()
      .then((data) => {
        setTotalData(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <main>
      <div>
        <h1>Turkey Page</h1>
      </div>
      {loading ? (
        <Skeleton />
      ) : (
        <DatePicker selected={date} onChange={(pickedDate) => setSelectedDate(pickedDate)} />
      )}
    </main>
  );
};

export default Turkey;
