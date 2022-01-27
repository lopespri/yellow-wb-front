import { useState, useEffect } from 'react';
import logo from './logo.png';
import userIcon from './user.png';
import premiumIcon from './premium.png';

import Footer from './Footer';

function App() {
  const [u, setU] = useState();

  useEffect(() => {
    fetch('https://www.sanar-yellow.com/user').then((d) => {
      setU(d);
    });
  }, [])

  return (
    <div className="App">
      <div>
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
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{ u.planType ? <>Plano premium <img src={premiumIcon} /></> : <></>}</div>
            <div style={{ fontSize: '12px', marginBottom: '10px' }}>Contratado em ${u.date}</div>
            <div style={{ fontSize: '12px', marginBottom: '10px' }}>Valor total: R$ ${u.planCost}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
