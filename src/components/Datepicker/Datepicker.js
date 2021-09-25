/* eslint-disable */

import React from "react";
import DatePicker from "react-datepicker";

const Datepicker = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = React.useState(new Date());
  const [fetchDate, setFetchDate] = React.useState("");
  const dateInputHandler = (inputDate) => {
    const dateToFetch = inputDate.toISOString().split("T")[0]; // returns date in YYYY-MM-DD format
    return dateToFetch;
  };
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(selectedDate) => {
        setDate(selectedDate);
        setFetchDate(dateInputHandler(selectedDate));
      }}
      // onCalendarClose={props.fetchDateData(fetchDate)}
    />
  );
};

export default Datepicker;
