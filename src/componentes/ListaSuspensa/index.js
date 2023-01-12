import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.times}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {/*props.itens.map(item => <option>{item}</option>)*/} 
                {/* Para cada item (item) -> retorna uma option -> impresso o item || Abaixo outro modo de se escrever, resumido*/}
                {props.itens.map(item => { 
                    return <option  key={item}>{item}</option>
                })}
            </select>
        </div>
        
    )
}
export default ListaSuspensa