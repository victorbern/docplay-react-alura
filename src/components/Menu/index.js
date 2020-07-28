import React from 'react';
import Logo from '../../assets/img/Logo.png';
// Logo do site importado de ../../assets/img/Logo.png

import './Menu.css';
import ButtonLink from './components/ButtonLink';
// tag ButtonLink importada porque muitos botões no site são igualmente feitos


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DocPlay logo"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
            
        </nav>
    );
}

export default Menu;
// para que possamos usar a tag Menu, precisamos exportar a função default por aqui