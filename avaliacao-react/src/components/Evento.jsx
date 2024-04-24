import React from "react"

export default function Evento({titulo, descricao, horario, local}){
    return(
        <div className="sessao">
            <div className="evento">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img width="200"src="https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg" alt="" />
        </div>
    )
}