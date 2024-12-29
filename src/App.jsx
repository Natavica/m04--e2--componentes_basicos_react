import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Estado para doctores y servicios
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  
  // Estado para la cita seleccionada
  const [selectedService, setSelectedService] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientName: '',
    selectedDoctor: '',
    appointmentDate: ''
  });

  // Usar useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    // Simulamos una carga de datos de doctores
    const doctorsData = [
      { id: 1, name: 'Dr. Juan Pérez', specialty: 'Cardiología', yearsOfExperience: 15 },
      { id: 2, name: 'Dra. Ana Gómez', specialty: 'Pediatría', yearsOfExperience: 10 },
      { id: 3, name: 'Dr. Roberto López', specialty: 'Dermatología', yearsOfExperience: 8 }
    ];

    // Simulamos una carga de datos de servicios
    const servicesData = ['Consulta General', 'Cirugía', 'Radiología', 'Urgencias'];

    // Actualizamos el estado con los datos cargados
    setDoctors(doctorsData);
    setServices(servicesData);
  }, []); // El array vacío asegura que se ejecute solo una vez cuando el componente se monta

  // Manejar el cambio del servicio seleccionado
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // Manejar el cambio de los detalles de la cita
  const handleAppointmentChange = (event) => {
    const { name, value } = event.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Manejar el envío del formulario de citas
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Detalles de la cita:', appointmentDetails);
    console.log('Servicio seleccionado:', selectedService);
    alert(`Cita agendada:
      Paciente: ${appointmentDetails.patientName}
      Doctor: ${appointmentDetails.selectedDoctor}
      Servicio: ${selectedService}
      Fecha: ${appointmentDetails.appointmentDate}`);
  };

  return (
    <div className="App">

      <Navbar />

      <h1>Bienvenido al Hospital</h1>

      <h2>Doctores Disponibles</h2>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}

      <ServiceList services={services} handleServiceChange={handleServiceChange} />

      <AppointmentForm 
        doctors={doctors} 
        appointmentDetails={appointmentDetails} 
        handleAppointmentChange={handleAppointmentChange} 
        handleSubmit={handleSubmit} 
      />

      <Footer />
    </div>
  );
}

export default App;
