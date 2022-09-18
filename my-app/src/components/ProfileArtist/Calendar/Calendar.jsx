import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import CalendarMonthView from "react-calendar-month-view";

export default function CalendarCmp () {
  const _renderDay = (day) => {
    const date = moment(day);

    const diff = date.diff(moment().startOf("day"));

    if (diff === -259200000 || diff === 259200000) {
      return (
        <div
          style={{
            boxSizing: "border-box",
            height: "100%",
            width: "100%",
            backgroundImage:
              "url(https://farm2.staticflickr.com/1203/1475793643_d911a66735_m.jpg)",
            backgroundSize: "cover"
            // borderRadius: showDefaultStyles ? 0 : '10%'
          }}
        />
      );
    }
  };
  return (
    <div className="CalendarCmp">
      <CalendarMonthView renderDay={_renderDay} />
    </div>
  );
}
