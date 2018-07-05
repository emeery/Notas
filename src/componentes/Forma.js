import React from 'react';
class Forma extends React.Component {
    constructor(props) {
        super(props);
        this.controlaEntrada = this.controlaEntrada.bind(this);
        this.apuntarNota = this.apuntarNota.bind(this);
        this.state = {
            nuevaNota: ''
        }
    }
    // controla el input 
    controlaEntrada = (e) => {
        e.preventDefault();
        this.setState({nuevaNota: e.target.value})
        //console.log(this.state.nuevaNota)
    }
    // establece la nota nuevamente a un string vacio
    apuntarNota () {
        this.props.agregarNota(this.state.nuevaNota)
        this.setState({nuevaNota: ''})
    }
    render() { 
        return (<div>
            <input 
            placeholder='ingresa una nota'
            value={this.state.nuevaNota}
            onChange={this.controlaEntrada}
            />
            <button
            onClick={this.apuntarNota}
            >add nota</button>
            </div>)
    }
}
 
export default Forma;