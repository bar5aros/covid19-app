/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import Doughnut from "../components/Charts/Doughnut";
import HorizontalBar from "../components/Charts/HorizontalBar";
import Table from "../components/Table/Table";
import "react-toastify/dist/ReactToastify.css";

import {
  fetchTotalData,
  totalChartData,
  totalTableData,
  dateInputHandler,
  fetchDayData,
  dayChartData,
  dayTableData,
} from "../services/CovidData";
import {
  HeaderText,
  TotalSection,
  SectionHeader,
  Container,
  ContainerLittle,
  DateText,
  DateTextContainer,
  DatePickerContainer,
  DailySection,
  ErrorContainer,
  ErrorText,
} from "../components/UI/UIComponents";

const Germany = () => {
  // to check if daily data exists
  const [dailyExists, setDailyExists] = React.useState(false);
  // other states
  const [date, setDate] = React.useState(new Date());
  const [loading, setLoading] = React.useState(true);
  const [totalChart, setTotalChart] = React.useState([]);
  const [dailyChart, setDailyChart] = React.useState([]);
  const [totalTable, setTotalTable] = React.useState([]);
  const [dayTable, setDayTable] = React.useState([]);

  React.useEffect(() => {
    fetchTotalData("Germany")
      .then((data) => {
        console.log(data);
        setTotalChart(totalChartData(data[0]));
        setTotalTable(totalTableData(data[0]));
        console.log("total chart data  ", totalChartData(data[0]));
        console.log("total table data  ", totalTableData(data[0]));
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderText>Germany</HeaderText>

      {/* Total Section Start */}

      <TotalSection>
        <SectionHeader>Total Data</SectionHeader>
        <Container>
          <HorizontalBar data={totalChart} />
        </Container>
        <Container>
          <Doughnut data={totalChart} />
        </Container>
        <Container>
          <Table data={totalTable} />
        </Container>
      </TotalSection>
      {/* Total Section End */}

      {/* Daily Section Start */}
      <DailySection>
        <SectionHeader>Daily Data</SectionHeader>
        <ContainerLittle>
          <DateTextContainer>
            <DateText>Select Date</DateText>
          </DateTextContainer>
          <DatePickerContainer>
            <DatePicker
              selected={date}
              onChange={async (selectedDate) => {
                setLoading(true);
                fetchDayData("Germany", dateInputHandler(selectedDate))
                  .then((data) => {
                    if (Object.keys(data.provinces).length === 5) {
                      setDailyChart(dayChartData(data[0]));
                      console.log(dayTableData(data[0]));
                      setDate(selectedDate);
                    }
                  })
                  .then(() => {
                    setLoading(false);
                    setDailyExists(true);
                  })
                  .catch((err) => {
                    console.log("Gün seçiminde hata oldu", err);
                    console.log("Seçilen gün", dateInputHandler(selectedDate));
                    setLoading(false);
                    toast("No data available");
                  });
              }}
            />
          </DatePickerContainer>
        </ContainerLittle>
        {!dailyExists ? (
          <ErrorContainer>
            <ErrorText>No data for that date</ErrorText>
          </ErrorContainer>
        ) : (
          <>
            <Container>
              <Doughnut data={dailyChart} />
            </Container>
            <Container>
              <Table data={dayTable} />
            </Container>
          </>
        )}
      </DailySection>
      {/* Daily Section End */}
      {/* Toast Section */}
      <ToastContainer />
    </>
  );
};

export default Germany;
