import { useRoute, Router } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <header className=''>
      <div className='flex grid items-center bg-orange-400'>
        <h1 className='flex justify-center text-2xl'>GameChangers</h1>
        <p>Marketplace de troca e venda de Jogos e Cartas</p>
          <button onClick={() => Router('../src/components/LoginPage.jsx')}>FAZER LOGIN</button>
          <button onClick={() => Router('../src/components/NovaConta.jsx')}>CRIAR CONTA</button>
          <button onClick={() => alert('Entrando como convidado...')}>CONVIDADO</button>
      </div>
    </header>
  );
}

export default App;
