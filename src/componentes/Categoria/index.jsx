import PropTypes from 'prop-types';
import "./Categoria.css"
import Card from '../Card'

const Categoria = (props) => {
    //Destructracion

    const { colorPrimario, colorSecundario, titulo} = props.datos
   
    

    const obj = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {backgroundColor: colorPrimario}

    return <section className="categoria" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="card">
            <Card />
        </div>
    </section>
}

Categoria.propTypes = {
    datos: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        colorPrimario: PropTypes.string.isRequired,
        colorSecundario: PropTypes.string.isRequired,
    }).isRequired,
};

export default Categoria;