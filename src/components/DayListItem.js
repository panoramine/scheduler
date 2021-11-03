import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {

  const dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = function() {
    if (props.spots === 0) {
      return `no spots remaining`
    }
    if (props.spots === 1) {
      return `${props.spots} spot remaining`
    }
    if (props.spots > 1) {
      return `${props.spots} spots remaining`
    }
  }

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass} selected={props.selected} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}