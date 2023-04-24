import style from "./Header.module.css"

function Header(){
    return(
        <div>
            <header>
               
               <div className={style.caixa}>
                    <div className={style.logo}></div>
                    <div className={style.procura}>
                    <i class="fas fa-magnifying-glass"></i> 
                    <p>O que você procura?</p>
                    </div>
                    <div className={style.compra}>
                        <p>-5% NA PRIMEIRA COMPRA</p>
                        <i class="fa-sharp fa-light fa-percent"></i>
                    </div>
                    <div className={style.usuario}>
                    <i class="fas fa-user"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                
              
               
            </header>
        </div>
    )
}

export default Header;