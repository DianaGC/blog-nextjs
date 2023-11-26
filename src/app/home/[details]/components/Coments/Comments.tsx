import React from "react"

export interface IComments {
    id: string,
    comment: string,
    date: string
}

const Comments = () => {
    // los comentarios se pueden leer de una base de datos y pintarlos 
    const comments = [{
        id: "01",
        comment: "Estuvo muy interesante",
        date: "2023/01"
    },
    {
        id: "01",
        comment: "El mes pasado, más de 200 personas se reunieron en mi ciudad natal, Cambridge, Ontario, para pasar el rato, hablar de negocios y echar un vistazo detrás de escena a algunas de las nuevas cosas en las que hemos estado trabajando.",
        date: "2023/02"
    }]
 
    return (
        <div className="">
            <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div >Comentarios: </div>
                <div>

                    <form>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                
                                <textarea id="comment" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escribir un comentario..." required></textarea>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Enviar
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
                <div >
                    {
                        comments.map((comment) => (
                            <div className=" p-6">
                                <div>{comment.comment}</div>
                                <div>{comment.date}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    )
}

export default Comments