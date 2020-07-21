import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/dayGrid";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mypage-body">
        <div className="body-wrapper box">
          <div className="body-info-container">
            <div className="calendar-wrapper">
              <Fullcalendar
                defaultView="dayDridMonth"
                plugins={[dayGridPlugin]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
