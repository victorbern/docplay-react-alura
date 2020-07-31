import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo (){
    return (
        <PageDefault>
            <div>Página de Cadastro de Vídeo</div>

            <Link to="/cadastro/categoria">Cadastrar uma nova categoria</Link>
        </PageDefault>
    );
}

export default CadastroVideo;