import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>Times</label>
            <select required={props.obrigatorio}>
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