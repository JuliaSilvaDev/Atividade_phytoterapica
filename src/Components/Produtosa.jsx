import styles from "./Produtosa.modules.css"
function Produtosa (props){
    return(
        <div className='fundo'>
                <img src={props.foto} alt="foto"></img>
            <h2> Óleo Essencial de {props.name} - 5ml</h2>
            <span> {props.valor} </span>
            <p>(ou até em 3x de R$ {props.parcelas} sem juros)</p>
        </div>

    )
}

export default Produtosa