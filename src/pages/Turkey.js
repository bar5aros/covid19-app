/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import axios from "axios";
import Table from "../components/Table/Table";
import Doughnut from "../components/Charts/Doughnut";
import TurkeyContext from "../Context/TurkeyContext";
import HorizontalBar from "../components/Charts/HorizontalBar";

const DUMMY_BAR_DATA = [133513, 452455, 24644, 56445];

const HeaderText = styled.h1`
  font-size: 2rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const TotalSection = styled.section`
  background-color: #cfd186;
`;

const SectionHeader = styled.h2`
  font-size: 1rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: left;
`;

const TotalTable = styled(Table)``;

const DailySection = styled.section`
  background-color: bisque;
`;

const Turkey = () => {
  // States
  const [date, setDate] = React.useState(new Date());
  const [loading, setLoading] = React.useState(true);
  const [totalData, setTotalData] = React.useState({});
  const [dailyData, setDailyData] = React.useState([{}]);
  const [dailyProcessed, setDailyProcessed] = React.useState([]);
  const [totalProcessed, setTotalProcessed] = React.useState([]);
  const startDate = new Date();
  const [fetchDate, setFetchDate] = React.useState("");

  const dateInputHandler = (inputDate) => {
    const dateToFetch = inputDate.toISOString().split("T")[0]; // returns date in YYYY-MM-DD format
    console.log("DateToFetch", dateToFetch);
    return dateToFetch;
  };
  const totalDataProcessor = (fetchedTotalData) => {
    const finalTotalData = [];
    finalTotalData.push({ confirmed: fetchedTotalData[0].confirmed });
    finalTotalData.push({ recovered: fetchedTotalData[0].recovered });
    finalTotalData.push({ deaths: fetchedTotalData[0].deaths });
    finalTotalData.push({ critical: fetchedTotalData[0].critical });
    setTotalProcessed(finalTotalData);
  };
  const totalChartData = (totalDataProcessed) => {
    const tempArr = [];
    const data = [];
    totalDataProcessed.forEach((el) => tempArr.push(Object.values(el)));
    tempArr.forEach((el) => data.push(el[0]));
    console.log("chart data", data);
    return data;
  };
  const dailyDataProcessor = (fetchedDailyData) => {
    const finalDailyData = [];
    finalDailyData.push({ confirmed: fetchedDailyData[0].provinces[0].confirmed });
    finalDailyData.push({ recovered: fetchedDailyData[0].provinces[0].recovered });
    finalDailyData.push({ deaths: fetchedDailyData[0].provinces[0].deaths });
    setDailyProcessed(finalDailyData);
  };
  const fetchDayData = async (dateInput) => {
    // getDailyReportByCountryName API
    const fetchURL = `https://covid-19-data.p.rapidapi.com/report/country/name?name=Turkey&date=${dateInput}`; // date=2020-04-01

    const res = await axios.get(fetchURL, {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
      },
    });
    console.log("ParsedDatacik", res.data);
    setDailyData(res.data);
  };
  const fetchTotalData = async () => {
    const res = await axios.get("https://covid-19-data.p.rapidapi.com/country?name=turkey", {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
      },
    });
    console.log("Fetched Data", res.data);
    return res.data;
  };
  React.useEffect(() => {
    fetchTotalData()
      .then((receivedData) => {
        setTotalData(receivedData);
        totalDataProcessor(receivedData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log("TotalData", totalData);
  console.log("Processed Total Data", totalProcessed);
  console.log("total chart data", totalChartData(totalProcessed));
  console.log(totalChartData(totalProcessed));

  return (
    <TurkeyContext.Provider value={(totalProcessed, dailyProcessed)}>
      <main>
        <HeaderText>Turkey</HeaderText>
        <TotalSection>
          <SectionHeader>Total Data</SectionHeader>
          <HorizontalBar data={totalChartData(totalProcessed)} />
        </TotalSection>
        <DailySection>
          <DatePicker
            selected={startDate}
            onChange={(selectedDate) => {
              setDate(selectedDate);
              console.log("SelectedDate", selectedDate);
              setFetchDate(dateInputHandler(selectedDate));
            }}
          />
          <Doughnut />
        </DailySection>
      </main>
    </TurkeyContext.Provider>
  );
};

export default Turkey;
