import style from "./Amostra.modules.css"

function Amostra (){
    return(
        <div className="Vegano">
            <div className="amostras">
                <div className="img"></div>
                    <div className="patinha">
                        <h2>Vegano</h2>
                        <p>sem componentes de origen animal</p>
                    </div>
                    <div className="linha"></div>
                <div className="imge"></div>
                    <div className="folha">
                        <h2>Cruelty-Free</h2>
                        <p>não testado em animais</p>
                    </div>
                    <div className="linha1"></div>
                    <div className="imgem"></div>
                    <div className="agua">
                        <h2>100% Puro</h2>
                        <p>óleos puros e naturais</p>
                    </div>
                
            </div>

        </div>
    )
}

export default Amostra