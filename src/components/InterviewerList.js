import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  // creates InterviewerListItem from props.interviewers and passes props
  const mappedInterviewerListItem = props.interviewers.map((interviewer) =>
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />

  )

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {mappedInterviewerListItem}
      </ul>
    </section>
  );
}

// certifies that the prop received is the correct type
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
