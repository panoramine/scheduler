// import { tsPropertySignature } from "@babel/types";
import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // maps over the days array to return <DaylistItem/> components as children with their props 
  const mappedDayListItem = props.days.map((day) => 
    <DayListItem 
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
    />
  );

  return (
  <ul>
    {mappedDayListItem}
  </ul>
  )
}
