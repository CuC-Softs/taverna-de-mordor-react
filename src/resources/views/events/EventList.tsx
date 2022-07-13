import React from "react";
import Main from "../layouts/Main";
import Calendar from "../partials/Calendar";

const EventList: React.FC = () => {
  return (
    <Main>
      <Calendar />
    </Main>
  );
};

export default EventList;
