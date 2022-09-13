import React from "react";
import DatePicker from "react-datepicker";

export default function Calendar () {
  return (
    <>
      <Datepicker 
        controls={['calendar']}
        min="1920-01-01"
        max="2050-01-01"
      />
    </>
  );
}


// example for today's labels and invalids
const myLabels = React.useMemo(() => {
  return [{
      start: '2022-09-12',
      textColor: '#e1528f',
      title: '2 SPOTS'
  }];
}, []);

const myInvalid = React.useMemo(() => {
  return [{
      start: '2022-09-12T08:00',
      end: '2022-09-12T13:00'
  }, {
      start: '2022-09-12T15:00',
      end: '2022-09-12T17:00'
  }, {
      start: '2022-09-12T19:00',
      end: '2022-09-12T20:00'
  }];
}, []);
                      
