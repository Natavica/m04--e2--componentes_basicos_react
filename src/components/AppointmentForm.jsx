import React, { useState } from 'react';

// Componente AppointmentForm
const AppointmentForm = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Cita agendada con el Dr. ${selectedDoctor} para el ${date} a las ${time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Cita</h2>

      <label htmlFor="doctor">Selecciona un doctor:</label>
      <select
        id="doctor"
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        required
      >
        <option value="">Seleccionar...</option>
        {/* Iteramos sobre los doctores para mostrar las opciones */}
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.name}>
            {doctor.name} - {doctor.specialty}
          </option>
        ))}
      </select>

      <label htmlFor="date">Fecha:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="time">Hora:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <button type="submit">Agendar cita</button>
    </form>
  );
};

export default AppointmentForm;

