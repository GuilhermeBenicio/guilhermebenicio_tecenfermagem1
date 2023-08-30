import React from 'react';
import './Perfil.css';
import estrela from './assets/estrela.svg';

const Perfil = ({ picture, nome, preco, localizacao }) => {
  return (
    <>
      <div className="perfil">
        <div className="itens-perfil">
          <div className="foto">
            <img src={picture} alt="" />
          </div>
          <div className="informacoes">
            <span className="nome">{nome}</span>
            <div className="itens">
              <span className="custo">{preco}</span>
              <span className="horario">Plantão</span>
            </div>
            <span className="localizacao">{localizacao}</span>
            <div className="avaliacao">
              <img src={estrela} alt="estrelas" />
              <img src={estrela} alt="estrelas" />
              <img src={estrela} alt="estrelas" />
              <img src={estrela} alt="estrelas" />
              <img src={estrela} alt="estrelas" />
              <span className="quantidadeAv">(8)</span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <span className="verPerfil">Ver Perfil</span>
      </footer>
    </>
  );
};

export default Perfil;
