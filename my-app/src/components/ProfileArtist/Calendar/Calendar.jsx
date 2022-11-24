import React from 'react';
import Box from '@mui/material/Box';
import moment from 'moment';
import CalendarMonthView from "react-calendar-month-view";

export default function CalendarCmp () {
  const _renderDay = (day) => {
    const date = moment(day);

    const diff = date.diff(moment().startOf("day"));

    if (diff === -259200000 || diff === 259200000) {
      return (
        <Box
          style={{
            boxSizing: "border-box",
            height: "100%",
            width: "100%",
            backgroundImage:
              "url(https://s-trojmiasto.pl/zdj/c/n/3/3139/2000x0/3139271.jpg)",
            backgroundSize: "cover" }} />
      );
    }
  };
  
  return (
    <>
      <CalendarMonthView renderDay={_renderDay} />
    </>
  );
}
