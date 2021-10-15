/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from "axios";
import { apiHost, apiKey } from "../Enums/Enums";

// TOTAL SECTION

export const fetchTotalData = async (country) => {
  // getLatestCountryDataByName API
  const config = {
    method: "get",
    url: `https://covid-19-data.p.rapidapi.com/country?name=${country}`,
    headers: {
      "x-rapidapi-host": apiHost,
      "x-rapidapi-key": apiKey,
    },
  };
  const response = await axios(config);
  try {
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(`Maalesef veri bulunamadi. Hata: ${error}`);
  }
};

export const totalChartData = (data) => {
  const chartData = [];
  // Confirmed
  chartData.push(data.confirmed);
  // Recovered
  chartData.push(data.recovered);
  // Deaths
  chartData.push(data.deaths);
  // Active
  chartData.push(data.active);
  return chartData;
};

export const totalTableData = (data) => {
  console.log("total table data fonksiyon", data);
  const tableData = [];
  // Confirmed
  tableData.push({ confirmed: data.confirmed });
  // Country
  tableData.push({ province: data.country });
  // Critical
  tableData.push({ critical: data.critical });
  // Deaths
  tableData.push({ deaths: data.deaths });
  // Recovered
  tableData.push({ recovered: data.recovered });
  return tableData;
};

// DAILY SECTION

export const fetchDayData = async (country, date) => {
  // getDailyReportByCountryName API
  const dailyConfig = {
    method: "get",
    url: `https://covid-19-data.p.rapidapi.com/report/country/name?name=${country}&date=${date}`,
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
    },
  };
  try {
    const response = await axios(dailyConfig);
    if (response.status === 200 && Object.keys(response.data.provinces[0]).length === 5) {
      return response.data;
    }
  } catch (error) {
    console.log(`Maalesef veri bulunamadi. Hata: ${error}`);
  }
};

export const dayChartData = (data) => {
  const chartData = [];
  // Confirmed
  chartData.push(data.provinces.confirmed);
  // Recovered
  chartData.push(data.provinces.recovered);
  // Deaths
  chartData.push(data.provinces.deaths);
  // Active
  chartData.push(data.provinces.active);
  // Return Data
  return chartData;
};

export const dayTableData = (data) => {
  const tableData = [];
  Object.keys(data.provinces).forEach((keys) => {
    tableData.push({
      key: keys,
      value: data.provinces[keys],
    });
  });
  return tableData;
};

// DATEPICKER FUNCTIONS

export const dateInputHandler = (inputDate) => inputDate.toISOString().split("T")[0]; // returns date in YYYY-MM-DD format
