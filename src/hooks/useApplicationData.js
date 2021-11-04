import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewers: {},
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });

  const updateSpots = function(state, appointments) {
    const day = state.days.find(d => d.name === state.day);

    let spots = 0;

    for (const id of day.appointments) {
      const appointment = appointments[id];

      // count number of null interviews as number of available spots
      if (!appointment.interview) {
        spots++;
      }
    }

    const newDay = { ...day, spots};

    const newDays = state.days.map(d => d.name === state.day ? newDay : d);

    return newDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, appointment)
    .then(response => {
      const days = updateSpots(state, appointments);
      setState({
        ...state,
        appointments,
        days
      })
    })
  }
  
  function cancelInterview(id) {
    const cancelAppointment = {
      ...state.appointments[id],
      interview: {...state.appointments[id].interview}
    }
    
    cancelAppointment.interview.interviewer = null;
    cancelAppointment.interview.student = null;
    
    const appointments = {
      ...state.appointments,
      [id]: cancelAppointment
    }
    
    return axios.delete(`/api/appointments/${id}`)
    .then(response => {
      const days = updateSpots(state, appointments);
      setState({
        ...state,
        appointments,
        days
      })
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}