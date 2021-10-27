import { tsPropertySignature } from "@babel/types";
import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {

  const mappedDayListItem = props.days.map((day) => 
    <DayListItem 
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  );

  return (
  <ul>
    {mappedDayListItem}
  </ul>
  )
}

export default DayList;