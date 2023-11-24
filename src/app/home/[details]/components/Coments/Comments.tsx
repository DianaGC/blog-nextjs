import React from "react"
import Image from 'next/image'
//import styles from "./card.module.scss"
import Link from "next/link"


const Comments = () => {
    // los comentarios se pueden leer de una base de datos y pintarlos 
    return (
        <div className="flex flex col m-5  md:flex-row md:overflow-hidden">
            <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div >Comentarios</div>
                <div className='"flex  flex col  md:flex-row md:overflow-hidden'>
                    <div className="p-3 ">
                        <div>Augosto 7, 2023</div>
                        <div>El mes pasado, más de 200 personas se reunieron en mi ciudad natal, Cambridge, Ontario, para pasar el rato, hablar de negocios y echar un vistazo detrás de escena a algunas de las nuevas cosas en las que hemos estado trabajando.
                        </div>
                    </div>
                    <div className="p-3 ">
                        <div>Augosto 7, 2023</div>
                        <div>Last month, over 200 people got together in my hometown of Cambridge, Ontario to hang out, talk shop, and get a peek behind the curtain at some of the new stuff we’ve been working on.
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Comments