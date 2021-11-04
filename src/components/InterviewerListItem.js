import "components/InterviewerListItem.scss";
import classNames from "classnames";
import React from "react";

export default function InterviewerListItem(props) {
  // classes will change depending on props value
  const interviewerClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}