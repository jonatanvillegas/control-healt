import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './HomeDr.css';
import logo from '../../Assets/Images/logo.png';
import doctor from '../../Assets/Images/doctor.png';
import expedient from '../../Assets/Images/expedient.png';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { OptionButton } from '../../Components/OptionButton/OptionButton';

function HomeDr() {
  return (
    <div className="full-screen-container">
      <div className="navbar">
        <Dropdown />
        <img src={logo} alt="Logo" className="logo-doctor" />
      </div>
      <Container className="centered-container">
        <Row className="button-container justify-content-between">
          {/* Botones de opción */} 
          <OptionButton image={doctor} text="Calendario de citas" to="/citasdr" />
          <OptionButton image={expedient} text="Expedientes" to="/expedient" />
          <OptionButton image={expedient} text="Historial de citas" to="/expedient" />
        </Row>
      </Container>
    </div>
  );
}

export default HomeDr;
