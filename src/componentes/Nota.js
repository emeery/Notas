import React from 'react';
import PropTypes from 'prop-types';
import '../Nota.css'
class Nota extends React.Component {
    constructor(props) {
        super(props);
        this.notaContenido = props.notaContenido;
        this.notaId = props.notaId;
        this.controlaRemoverNota = this.controlaRemoverNota.bind(this);
    }
    controlaRemoverNota(id){
        this.props.removerNota(id);
    }
    render() { 
        return (
            <div 
            className="nota_contenido"
            key={this.notaId}>
                <h2>{this.notaContenido}</h2>
                <button 
                onClick={() => 
                    this.controlaRemoverNota(this.notaId)
                }
                className="x">X</button>
            </div>)
    }
}
Nota.propTypes = {
    notaContenido: PropTypes.string.isRequired
}
export default Nota;

// onClick={this.controlaRemoverNota(this.notaId)}