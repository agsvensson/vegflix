import React from 'react';

function ButtonLink(props) {   // props é um objeto que pegamos do componente que traz alguma coisa. ex. 
    // props => { className: "o que alguém passar", href="/" }
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink; // exporta para poder importar em outro lugar