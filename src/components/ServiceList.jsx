import React from 'react';

// Componente ServiceList
const ServiceList = ({ services }) => {
  return (
    <div className="service-list">
      <h2>Servicios Médicos Disponibles</h2>
      <ul>
        {/* Iteramos sobre los servicios y mostramos cada uno como un <li> */}
        {services.map((service, index) => (
          <li key={index}>{service}</li> 
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
