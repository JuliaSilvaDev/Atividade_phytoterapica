import styles from "./Inscreva.modules.css"

function Inscreva(){
    return(
        <div className="inscreva">
            <div className="agora">
                <p>INSCREVA-SE</p>
                <p className="P">E RECEBA NOVIDADES E PROMOÇÕES</p>
            </div>
            <div className="input">
            <input className=" put" type="text" placeholder="Seu e-mail" />
            </div>
            <div className="assinar">
                <p> ASSINAR NEWSLETTER</p>
            </div>

        </div>
    )
}

export default Inscreva