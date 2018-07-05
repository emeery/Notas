import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nota from './componentes/Nota';
import Forma from './componentes/Forma';
import {DB_CONFIG} from './config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor() {
    super();
    this.agregarNota = this.agregarNota.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.basedatos = this.app.database().ref().child('notas');
    // this.state = {
    //   notas : [
    //     {id: 1, notaContenido: 'primera nota' },
    //     {id: 2, notaContenido: 'segunda nota' }
    //   ]
    // }
      this.state = {
        notas: []
      }
  }
  componentWillMount() {
    const notasPrevias = this.state.notas;
    this.basedatos.on('child_added', snap => {
      notasPrevias.push({
        id: snap.key,
        notaContenido: snap.val().notaContenido
      })
    })

    this.setState({
      notas: notasPrevias
    })
  }
  agregarNota = (nota) => {
    // introduce la nueva nota dentro del arreglo
    this.basedatos.push().set({ notaContenido: nota });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Lista React + Firebase</h2>
          <div>
          {
            this.state.notas.map(nota => {
              return (
                <Nota
                key={nota.id}
                notaContenido={nota.notaContenido}
                notaId={nota.id}
                />
              )
            })
          }
          </div>
          <Forma
          agregarNota={this.agregarNota}
          />
        </div>
      </div>
    );
  }
}

export default App;
