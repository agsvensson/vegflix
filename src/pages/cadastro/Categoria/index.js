import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [nomeDaCategoria] = useState('Valor Inicial');

//setNomeDaCategoria

  console.log('[nomeDaCategoria]', nomeDaCategoria);

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form>
      {/* State*/}
      <label>
        Nome da Categoria: 
        <input type="text" value={nomeDaCategoria} />
      </label>

      <button>
        Cadastrar
      </button>

      </form>




        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;