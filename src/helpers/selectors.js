// return array of appointments for the given day
export function getAppointmentsForDay(state, day) {
  let appointmentsForDay = [];
  
  for (let correctDay of state.days) {

    if (correctDay['name'] === day) {
      
      for (let appointmentId of correctDay.appointments) {
        appointmentsForDay.push(state.appointments[String(appointmentId)])
      }
    }
  }

  return appointmentsForDay;
}

//return array of interviewers for given day
export function getInterviewersForDay(state, day) {
  let interviewers = [];

  const filteredAppointments = state.days.filter(correctDay => correctDay.name === day);

  if (filteredAppointments.length) {
    if (filteredAppointments[0].interviewers) {
      interviewers = filteredAppointments[0].interviewers.map(id => state.interviewers[id]);
    }
  }

  return interviewers;
}

// returns an object containing the interview data when passed an object that contains the interviewer
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  return {...interview, interviewer: state.interviewers[interview.interviewer]};
}
