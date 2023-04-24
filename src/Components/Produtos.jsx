import styles from "./Produtos.modules.css"
function Produtos(props){
    return(
        <div className='fundo'>
                <img src={props.foto} alt="foto"></img>
            <h2> Óleo Essencial de {props.name} - 10ml</h2>
            <span> {props.valor} </span>
            <p>(ou até em 3x de R$ {props.parcelas} sem juros)</p>
        </div>

    )
}

export default Produtos