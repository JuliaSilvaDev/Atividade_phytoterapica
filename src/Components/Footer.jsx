import styles from './Footer.modules.css'

function Footer(){
    return(
        <div className="footer">
            <div className="propaganda">
                <p>Formas de pagamento</p>
                <div className="prop1"></div>
                <div className="prop2"></div>
                <div className="prop3"></div>
                <div className="prop4"></div>
                <div className="prop5"></div>
                <div className="prop6"></div>
            </div>
            <div className="Logoo"></div>
            <div className="media">
               <div className="icon"><i class="fa-brands fa-instagram"></i></div>
               <div className="icon"><i class="fab fa-facebook"></i></div>
               <div className="icon"><i class="fa-solid fa-wifi"></i></div>
               <div className="icon"><i class="fab fa-youtube"></i></div>
               <div className="icon"><i class="fab fa-twitter"></i></div>
            </div>

            <div className="seguranca">
                <p>Plataforma protegida por:</p>
                <div className="seg1"></div>
                <div className="seg2"></div>
                <div className="seg3"></div>
                <div className="seg4"></div>
            </div>

            <div className="seguro">
                <div className="doce"></div>
                <p>PHYTOTERAPICA© 2023 AV NOVA CANTAREIRA, 2627 - SÃO PAULO/SPCNPJ: 72.962.327/0001-55</p>
            </div>
            
    

        </div>
    )
}

export default Footer