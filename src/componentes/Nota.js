import React from 'react';
import PropTypes from 'prop-types';
class Nota extends React.Component {
    constructor(props) {
        super(props);
        this.notaContenido = props.notaContenido;
        this.notaId = props.notaId;
    }
    render() { 
        return (
            <div key={this.notaId}>
                <h2>{this.notaContenido}</h2>
            </div>)
    }
}
Nota.propTypes = {
    notaContenido: PropTypes.string
}
export default Nota;