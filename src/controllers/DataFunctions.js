import React from "react";
import axios from "a  xios";

const totalDataProcessor = (fetchedTotalData) => {
  const finalTotalData = [];
  finalTotalData.push({ confirmed: fetchedTotalData[0].confirmed });
  finalTotalData.push({ recovered: fetchedTotalData[0].recovered });
  finalTotalData.push({ deaths: fetchedTotalData[0].deaths });
  finalTotalData.push({ critical: fetchedTotalData[0].critical });
  return finalTotalData;
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
  console.log("Parsed Response Data", res.data[0].provinces[0]);
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
  return finalDailyData;
  // setDailyProcessed(finalDailyData);
};
const fetchDayHandler= async (inputDate) => {
  const dateToFetch = await inputDate.toISOString().split("T")[0]; // returns date in YYYY-MM-DD format
  await fetchDayData(dateToFetch).then((data) => {
    dailyDataProcessor(data);
  });
  // setDailyData(dailyProcessed);
  console.log("DateToFetch", dateToFetch);
  console.log("Final Data", dailyProcessed);
  return dailyProcessed;
};

const tableData = (country) => {
  const tableData = {
    country: country,
    confirmed: totalChartData(totalProcessed)[0],
    recovered: totalChartData(totalProcessed)[1],
    deaths: totalChartData(totalProcessed)[2],
    critical: totalChartData(totalProcessed)[3],
  };
  return tableData;
};