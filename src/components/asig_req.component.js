import React, { Component } from 'react';
import './App.css';

export default class CrearReq extends Component {
  render() {
    return (
      <div style={{ marginTops: 10 }}>
        <form onSubmit={this.onSubmit} className="form-des">
          <div className="form.grup">
            <p className="text">Nombre de requerimiento:</p>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeDocument}
            />
          </div>
          <div className="form.grup">
            <p className="text">Ingeniero a asignar:</p>
          </div>
          <select className="select">
            <option selected value="">
              Seleccione
            </option>
            <option value="">Ingeniero 2</option>
            <option value="">Ingeniero 3</option>
            <option value="">Ingeniero 3</option>
          </select>
          <div className="form-grup">
            <br />
            <button type="Submit" value="Guardar" className="btn-guardar-form">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
