import style from "./Nav.module.css"

function Nav(){
    return(
        <div className={style.navbar}>
            <nav>
                <p>ÓLEOS ESSENCIAIS</p>
                <p>ÓLEOS VEGETAIS</p>
                <p>SINERGIAS</p>
                <p>COSMÉTICOS NATURAIS</p>
                <p>HIGIENE PESSOAL</p>
                <p>AMORATIZADORES</p>
                <p>SUPLEMENTOS</p>
                <p>ACESSÓRIOS</p>
                <p>OFERTAS</p>
                <p>CONSULTOR(A)</p>
            </nav>
            <hr />
        </div>
        
    )
}

export default Nav;