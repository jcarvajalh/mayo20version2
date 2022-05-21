import React, { Component } from 'react';
import './App.css';

export default class CrearDes extends Component {
  constructor(props) {
    super(props);

    this.onChangeDocument = this.onChangeDocument.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dev_document: '',
      dev_name: '',
    };
  }

  onChangeDocument(e) {
    this.setState({ dev_document: e.target.value });
  }

  onChangeName(e) {
    this.setState({ dev_name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('se envió el formulario');
    console.log('Nombre del desarrollador: ${this.state.dev_name}');
    console.log('Dcoumento del desarrollador: ${this.state.dev_document}');
  }

  render() {
    return (
      <div style={{ marginTops: 10 }}>
        <form onSubmit={this.onSubmit} className="form-des">
          <div className="form.grup">
            <p className="text">Documento:</p>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeDocument}
            />
          </div>
          <div className="form.grup">
            <p className="text">Nombre:</p>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeName}
            />
          </div>
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
