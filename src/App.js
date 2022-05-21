import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CrearTarea from './components/CrearTarea.component.js';
import EditarTarea from './components/EditarTarea.component.js';
import ListaTareas from './components/ListaTareas.component.js';

import AsigReq from './components/asig_req.component.js';
import CrearReq from './components/crear_req.component.js';
import CrearDes from './components/crear_des.component.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              RTM proyecto
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/createReq" className="nav-link">
                    Crear requerimiento
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/createDes" className="nav-link">
                    Crear desarrollador
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/AsignarReq" className="nav-link">
                    Asignar requerimiento
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/createReq" exact element={<CrearReq />} />
            <Route path="/AsignarReq" element={<AsigReq />} />
            <Route path="/createDes" element={<CrearDes />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
