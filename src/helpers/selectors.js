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
