import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  const mappedInterviewerListItem = props.interviewers.map((interviewer) =>
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />

  )

  console.log(mappedInterviewerListItem)

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {mappedInterviewerListItem}
      </ul>
    </section>
  );
}