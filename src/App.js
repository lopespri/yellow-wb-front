import { useState, useEffect } from 'react';
import logo from './logo.png';
import userIcon from './user.png';
import premiumIcon from './premium.png';

import './index.css';

function App() {
  const [u, setU] = useState();

  useEffect(() => {
    /*
    Exemplo de resposta da API:

    {
      name: 'Alice Meira Gonçalves',
      email: 'alicemeira@gmail.com',
      plan: {
        type: 'premium',
        startDate: '2022-01-12T16:51:00Z',
        cost: 400.00,
      }
    }
    */
    fetch('https://www.sanar-yellow.com/user').then((d) => {
      setU(d);
    });
  }, []);

  return (
    <div className="App">
      <div className="search">
        <img src={logo} alt="" />
        <div>O que deseja pesquisar hoje?</div>
      </div>
      <div style={{ padding: '40px'}}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Minha conta</div>
        <div className='account-info'>
          <div style={{ display: 'flex' }}>
            <img src={userIcon} alt="" />
            <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>{u.name}</div>
            <div>alicemeira@gmail.com</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>Dados da assinatura</div>
            <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>{ u.plan.type ? <>Plano Premium <img src={premiumIcon} /></> : <>Plano Simples</>}</div>
            <div style={{ fontSize: '12px', marginBottom: '10px' }}>Contratado em {u.plan.startDate}</div>
            <div style={{ fontSize: '12px', marginBottom: '10px' }}>Valor total: R$ {u.plan.cost}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
          <div style={{ fontWeight: 'bold' }}>Conheça o app</div>
          <div>
            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.sanarmed.com/'}>SANAR MED</div>
            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.sanarmed.com/residenciamedica'}>SANAR RESIDÊNCIA MÉDICA</div>
            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'hhttps://up.sanar.com.br/'}>SANAR UP</div>
            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://pos.sanarmed.com/'}>SANAR PÓS</div>
          </div>
          <div>
            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.sanarmed.com/termos'}>TERMOS DE USO</div>
            <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://www.sanarmed.com/privacidade'}>PRIVACIDADE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
