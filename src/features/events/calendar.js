import React, { useEffect } from "react";
// import "./styles.css";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSelector, useDispatch } from "react-redux";
import { getAllEventsThunk } from "./getAllEventsSlice";

export const Calendar = () => {
  const dispatch = useDispatch();
  const { events, status, loading } = useSelector(
    (store) => store.getAllEvents
  );
  console.log(events);
  useEffect(() => {
    dispatch(getAllEventsThunk());
  }, []);
  // const eventss = [];
  //console.log(eventss);
  return (
    <>
      <section className="section">
        <Link to="createAppoinment" className="btn">
          Create Appoinment
        </Link>
      </section>
      ;
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events.length ? events : null}
        />
      </div>
    </>
  );
};
