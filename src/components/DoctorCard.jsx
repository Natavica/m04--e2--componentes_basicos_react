import React from 'react';

// Componente DoctorCard
const DoctorCard = ({ name, specialty, yearsOfExperience }) => {
  return (
    <div className="doctor-card">
      <h3>{name}</h3> {/* Mostrar el nombre del doctor */}
      <p>Especialidad: {specialty}</p> {/* Mostrar la especialidad del doctor */}
      <p>Años de experiencia: {yearsOfExperience}</p> {/* Mostrar los años de experiencia del doctor */}
    </div>
  );
};

export default DoctorCard;
