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
// import ReactTable from "../components/Table/ReactTable";
import Doughnut from "../components/Charts/Doughnut";
import HorizontalBar from "../components/Charts/HorizontalBar";
import Table from "../components/Table/Table";

const DUMMY_BAR_DATA = [133513, 452455, 24644, 56445];

const HeaderText = styled.h1`
  font-size: 2rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const TotalSection = styled.section`
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
`;

const SectionHeader = styled.h2`
  font-size: 1rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: left;
`;

const Container = styled.div`
  width: 60%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8%;
  padding: 20px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLittle = styled.div`
  width: 60%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DateTextContainer = styled.div`
  width: 30%;
  min-width: 100px;
  max-width: 130px;
  background-color: red;
`;

const DailySection = styled.section`
  background-color: #c0c0c0;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Turkey = () => {
  // States
  const [date, setDate] = React.useState(new Date());
  const [loading, setLoading] = React.useState(true);
  const [totalData, setTotalData] = React.useState({});
  const [dailyData, setDailyData] = React.useState([{}]);
  const [dailyProcessed, setDailyProcessed] = React.useState([]);
  const [totalProcessed, setTotalProcessed] = React.useState([]);
  const [fetchDate, setFetchDate] = React.useState("");

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

  const fetchDayData = async (dateInput) => {
    // getDailyReportByCountryName API
    const fetchURL = `https://covid-19-data.p.rapidapi.com/report/country/name?name=Turkey&date=${dateInput}`; // date=2020-04-01

    const res = await axios.get(fetchURL, {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
      },
    });
    console.log("ParsedDatacik", res.data[0].provinces[0]);
    return res.data[0].provinces[0];
  };
  const fetchTotalData = async () => {
    const res = await axios.get("https://covid-19-data.p.rapidapi.com/country?name=turkey", {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
      },
    });
    console.log("Fetched Total Data", res.data);
    return res.data;
  };
  const dailyDataProcessor = (fetchedDailyData) => {
    const finalDailyData = [];
    console.log("got this data from axios", fetchedDailyData);
    finalDailyData.push({
      confirmed: fetchedDailyData.confirmed,
      recovered: fetchedDailyData.recovered,
      deaths: fetchedDailyData.deaths,
    });
    console.log("daily data processed", finalDailyData);
    // finalDailyData.push({ confirmed: fetchedDailyData[0].provinces[0].confirmed });
    // finalDailyData.push({ recovered: fetchedDailyData[0].provinces[0].recovered });
    // finalDailyData.push({ deaths: fetchedDailyData[0].provinces[0].deaths });
    setDailyProcessed(finalDailyData);
  };
  const dateInputHandler = async (inputDate) => {
    const dateToFetch = await inputDate.toISOString().split("T")[0]; // returns date in YYYY-MM-DD format
    await fetchDayData(dateToFetch).then((data) => {
      dailyDataProcessor(data);
    });
    setDailyData(dailyProcessed);
    console.log("DateToFetch", dateToFetch);
    console.log("Final Data", dailyProcessed);
  };

  const TableData = {
    country: "Turkey Data",
    confirmed: totalChartData(totalProcessed)[0],
    recovered: totalChartData(totalProcessed)[1],
    deaths: totalChartData(totalProcessed)[2],
    critical: totalChartData(totalProcessed)[3],
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
    <>
      <HeaderText>Turkey</HeaderText>

      {/* Total Section Start */}

      <TotalSection>
        <SectionHeader>Total Data</SectionHeader>
        <Container>
          <HorizontalBar data={totalChartData(totalProcessed)} />
        </Container>
        <Container>
          <Doughnut data={totalChartData(totalProcessed)} />
        </Container>
        <Container>
          <Table data={TableData} />
        </Container>
      </TotalSection>

      {/* Total Section End */}

      {/* Daily Section Start */}
      <DailySection>
        <SectionHeader>Daily Data</SectionHeader>
        <ContainerLittle>
          <DateTextContainer>
            <h3>Select Date</h3>
          </DateTextContainer>
          <DatePicker
            selected={date}
            onChange={(selectedDate) => {
              dateInputHandler(selectedDate);
              setDate(selectedDate);
            }}
          />
        </ContainerLittle>
        <Container>
          <Doughnut />
        </Container>
      </DailySection>
      {/* Daily Section End */}
    </>
  );
};

export default Turkey;
