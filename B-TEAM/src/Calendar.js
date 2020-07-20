import React from "react";
import "./CSS/styles.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";

BigCalendar.momentLocalizer(moment);

/**
 *
 * new Date();
 * new Date(value);
 * new Date(dateString);
 * new Date(year, monthIndex[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
 * monthIndex는 0부터 시작 , 0은 1월을 의미, 11은 12월을 의미
 *
 */

class Calendar extends React.Component {
  render() {
    const Calendar = () => {
      <div style={{ height: 500 }}>
        <BigCalendar
          events={[
            {
              title: "7.21 코딩발표",
              allDay: false,
              start: new Date(2020, 1, 20, 10, 0), // AM 10:00
              end: new Date(2020, 1, 20, 10, 30), //PM 2:00
            },
          ]}
          step={60}
          view="month"
          views={["month"]}
          min={new Date(2020, 0, 1, 8, 0)} // AM 8:00
          max={new Date(2020, 0, 1, 17, 0)} // Max will be PM 6:00
          date={new Date(2020, 1, 20)}
        />
      </div>;
    };
  }
}
export default Calendar;
