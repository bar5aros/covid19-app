/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import Table from "../components/Table/Table";
import Doughnut from "../components/Charts/Doughnut";
import TurkeyContext from "../Context/TurkeyContext";

// const DUMMY_DATA = [
//   {
//     confirmed: 15325,
//   },
//   {
//     recovered: 315,
//   },
//   {
//     deaths: 356,
//   },
// ];

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
  const dailyDataProcessor = (dailyData) => {
    const finalDailyData = [];
    finalDailyData.push({ confirmed: dailyData[0].provinces[0].confirmed });
    finalDailyData.push({ recovered: dailyData[0].provinces[0].recovered });
    finalDailyData.push({ deaths: dailyData[0].provinces[0].deaths });
    setDailyProcessed(finalDailyData);
  };
  const fetchDayData = async (dateInput) => {
    // getDailyReportByCountryName API
    const fetchURL = `https://covid-19-data.p.rapidapi.com/report/country/name?name=Turkey&date=${dateInput}`; // date=2020-04-01
    const response = await fetch(fetchURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8", // insert API key
      },
    });
    const parsedData = await response.json();
    console.log("ParsedDatacik", parsedData);
    setDailyData(parsedData);
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
  const totalDataProcessor = (totalData) => {
    const finalTotalData = [];
    finalTotalData.push({ confirmed: totalData[0].confirmed });
    finalTotalData.push({ recovered: totalData[0].recovered });
    finalTotalData.push({ deaths: totalData[0].deaths });
    finalTotalData.push({ critical: totalData[0].critical });
    setTotalProcessed(finalTotalData);
  };
  const prepareData = (data) => {
    const arrayData = [];
    // Confirmed
    arrayData.push(data[0].confirmed);
    // Recovered
    arrayData.push(data[0].recovered);
    // Deaths
    arrayData.push(data[0].deaths);

    return arrayData;
  };
  React.useEffect(() => {
    fetchTotalData()
      .then((receivedData) => {
        console.log(`Fetched data of ${receivedData[0].country}. See the response below.`);
        console.log(receivedData);
      })
      .then((data) => {
        setTotalData(data[0]);
        console.log("Set state data");
      })
      .then(() => {
        setTotalProcessed(totalData);
      })
      .then(() => {
        setLoading(false);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <TurkeyContext.Provider value={(totalProcessed, dailyProcessed)}>
      <main>
        <HeaderText>Turkey</HeaderText>
        <TotalSection>
          <SectionHeader>Total Data</SectionHeader>
          {/* <TotalTable data={DUMMY_DATA}/> */}
        </TotalSection>
        <DailySection>
          <DatePicker
            selected={startDate}
            onChange={(selectedDate) => {
              setDate(selectedDate);
              console.log("SelectedDate", selectedDate);
              setFetchDate(dateInputHandler(selectedDate));
            }}
            onCalendarClose={() =>
              fetchDayData(fetchDate).then(() => dailyDataProcessor(dailyData))
            }
          />
          <Doughnut />
        </DailySection>
      </main>
    </TurkeyContext.Provider>
  );
};

export default Turkey;
