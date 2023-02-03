import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import CitiesContainer from '../../cities/container/CitiesContainer';

const MenuLayout = (props) => {
  return (
    <Router>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Link to="/">Inicio</Link>
        <Link to="/ciudades">Ciudades</Link>
        <Link to="/" onClick={props.logout}>Cerrar sesión</Link>
      </div>
      <Routes>
        <Route path="/ciudades" element={<CitiesContainer />} />
      </Routes>
    </Router>
  );
};

export default MenuLayout;