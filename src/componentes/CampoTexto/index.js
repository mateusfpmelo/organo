import './Campotexto.css'

// Cria uma constante com uma aero function
const CampoTexto  = (props) => {
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
            
        </div>
    )
}

export default CampoTexto