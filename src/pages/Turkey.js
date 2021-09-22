/* eslint-disable */
import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import Table from "../components/Table/Table";
import axios from 'axios';

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

const Turkey = () => {
  // States
  // const [date, setDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [totalData, setTotalData] = useState({});
  // const [dailyData, setDailyData] = useState([{}]);
  // const fetchDayData = async (dateInput) => {
  //   // getDailyReportByCountryName API
  //   const fetchURL = `https://covid-19-data.p.rapidapi.com/report/country/name?name=Turkey&date=${dateInput}`;
  //   const response = await fetch(fetchURL, {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  //       "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8", // insert API key
  //     },
  //   });
  //   const parsedData = await response.json();
  //   return parsedData;
  // };
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
  useEffect(() => {
    fetchTotalData()
      .then((receivedData) => {
        console.log(`Fetched data of ${receivedData[0].country}. See the response below.`);
        console.log(receivedData);
        // console.log(receivedData[0]);
      })
      // .then((data) => {
      //   setTotalData(data[0]);
      // })
      // .then(()=> {
      //   console.log("Set state data");
      // })
      .then(() => {
        setLoading(false);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <main>
          <HeaderText>Turkey</HeaderText>
          <TotalSection>
            <SectionHeader>Total Data</SectionHeader>
            <TotalTable/>
            {/* <ul>
              {totalData[0].map((i) => (
                <li>{i}</li>
              ))}
            </ul> */}
          </TotalSection>
        </main>
      )}
    </>
  );
};

export default Turkey;
