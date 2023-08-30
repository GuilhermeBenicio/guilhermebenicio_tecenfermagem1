import React from 'react';
import './App.css';
import Perfil from './Perfil';
import seta from './assets/seta.svg';
import lupa from './assets/lupa.svg';
import foto1 from './assets/richard.png';
import foto2 from './assets/carolina.png';
import foto3 from './assets/odete.png';
import foto4 from './assets/camilacouto.png';

function App() {
  return (
    <div className="container">
      <div className="cabecalho">
        <div className="itens-cabecalho">
          <img src={seta} alt="seta" />
          <div>
            <p className="curso">Tec Enfermagem</p>
          </div>
          <img src={lupa} alt="pesquisar" />
        </div>
      </div>
      <p className="informativo">14 profissionais</p>
      <Perfil
        picture={foto1}
        nome="Richard Ramos"
        preco="R$ 70,00"
        localizacao="Coren: 00/00000 | São Paulo - SP"
      />
      <Perfil
        picture={foto2}
        nome="Carolina Magalhães"
        preco="R$ 80,00"
        localizacao="São Paulo - SP"
      />
      <Perfil
        picture={foto3}
        nome="Odete Rocha"
        preco="R$ 70,00"
        localizacao="Coren: 00/00000 | São Paulo - SP"
      />
      <Perfil
        picture={foto4}
        nome="Camila Couto"
        preco="R$ 90,00"
        localizacao="Coren: 00/00000 | São Paulo - SP"
      />
    </div>
  );
}

export default App;
