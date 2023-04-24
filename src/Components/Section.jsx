import style from "./Section.module.css"

function Section(){
    return(
        <div>
            <section>
                <div className={style.Filtrar}>
                    <div className={style.fil}>
                        <p className={style.filtro}>FILTRAR</p>
                        <i class="fa-solid fa-sliders"></i>
                    </div>
                    <div className={style.or}>
                        <p class={style.filtro}>ORDENAR POR</p>
                        <i class="fas fa-list"></i>
                    </div>
                    <div className={style.produtos}>
                    <p >16 Produtos</p>
                    </div>
                    
                </div>

            </section>
        </div>

    );
}

export default Section