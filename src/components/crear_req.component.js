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
            <p className="text">Fecha de inicio:</p>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeName}
            />
          </div>
          <div className="form.grup">
            <p className="text">Estado inicial:</p>
          </div>
          <select className="select">
            <option selected value="">
              Opcion 1
            </option>
            <option value="">Opcion 2</option>
            <option value="">Opcion 3</option>
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
