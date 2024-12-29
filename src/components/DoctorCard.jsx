import React from "react";

// Componente DoctorCard
const DoctorCard = ({ name, specialty, yearsOfExperience }) => {
  return (
     <div className="doctor-card">
      <p>{name}</p> 
      <p>Especialidad: {specialty}</p> 
      <p>Años de experiencia: {yearsOfExperience}</p> 
    </div> 
    
  );
};

export default DoctorCard;

{
  /* <div className="doctor-card">
      <h3>{name}</h3> 
      <p>Especialidad: {specialty}</p> 
      <p>Años de experiencia: {yearsOfExperience}</p> 
    </div> */
}
