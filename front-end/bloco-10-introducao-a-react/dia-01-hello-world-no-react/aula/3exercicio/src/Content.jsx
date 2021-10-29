import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return (
      <div>
        {conteudos.map((nome) => {
          return (
            <div key={nome.conteudo}>
              <h4>{`O conteúdo é: ${nome.conteudo}`}</h4>
              <p>{`status: ${nome.status}`}</p>
              <p>{`bloco: ${nome.bloco}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Content;
