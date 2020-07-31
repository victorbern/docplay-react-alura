import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
// Logo do site importado de ../../assets/img/Logo.png

import './Menu.css';
import Button from '../../components/Button';
// tag ButtonLink importada porque muitos botões no site são igualmente feitos


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DocPlay logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
            
        </nav>
    );
}

export default Menu;
// para que possamos usar a tag Menu, precisamos exportar a função default por aqui