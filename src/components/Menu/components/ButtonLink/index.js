import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguém passar", href: "/" }
    // entenda props como um objeto que é recebido aqui na função ButtonLink
    return (

        <a href={props.href} className={props.className}>
            {props.children}
            {/* as chaves são obrigatóriamente usadas para inserir JS no html que está no nosso JavaScript */}
        </a>
    );
}

export default ButtonLink;