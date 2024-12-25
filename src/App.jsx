import React from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import './App.css';

function App() {
  const doctors = [
    { name: 'Dr. Juan Pérez', specialty: 'Cardiología', yearsOfExperience: 15 },
    { name: 'Dra. Ana Gómez', specialty: 'Pediatría', yearsOfExperience: 10 },
    { name: 'Dr. Roberto López', specialty: 'Dermatología', yearsOfExperience: 8 },
  ];

  const services = ['Consulta General', 'Cirugía', 'Radiología', 'Urgencias'];

  return (
    <div className="App">
      <h1>Bienvenido al Hospital</h1>

      <h2>Doctores Disponibles</h2>
      {/* Renderizamos los doctores utilizando el componente DoctorCard */}
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} />
      ))}

      <ServiceList services={services} />

      <AppointmentForm doctors={doctors} />
    </div>
  );
}

export default App;
