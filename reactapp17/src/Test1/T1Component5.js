import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { parseISO, formatDistanceToNow } from "date-fns";

export default function TimeDemo() {
  const [datetime12h, setDateTime12h] = useState('');
  const [datetime24h, setDateTime24h] = useState(null);
  const [time, setTime] = useState(null);
  const [timeAgo, setTimeAgo] = useState(null);

  function handleChange(e, setterFunction) {
    const selectedDate = e.value.toISOString();
    // console.log(selectedDate); // Access the selected date and time
    setterFunction(e.value); // Update the state

    if (selectedDate) {
      const parsedDate = parseISO(selectedDate);
      const timeAgoValue = formatDistanceToNow(parsedDate);
      setTimeAgo(timeAgoValue);
    } else {
      setTimeAgo(null);
    }
  }

  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid">
        <div className="flex-auto">
          <label htmlFor="calendar-12h" className="font-bold block mb-2">
            12h Format
          </label>
          <Calendar
            id="calendar-12h"
            value={datetime12h}
            onChange={(e) => handleChange(e, setDateTime12h)}
            showTime
            hourFormat="12"
            // dateFormat="dd-mm-yy"
            dateFormat="yy-mm-dd"
            maxDate={new Date()}
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="calendar-24h" className="font-bold block mb-2">
            24h Format
          </label>
          <Calendar
            id="calendar-24h"
            value={datetime24h}
            onChange={(e) => handleChange(e, setDateTime24h)}
            showTime
            hourFormat="24"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
            Time Only
          </label>
          <Calendar
            id="calendar-timeonly"
            value={time}
            onChange={(e) => handleChange(e, setTime)}
            timeOnly
          />
        </div>
      </div>
      {timeAgo && <h3> {timeAgo} ago </h3>}
    </>
  );
}
