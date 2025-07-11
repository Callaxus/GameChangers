import { useRoute, Router, useNavigate } from 'react-router-dom';
import './App.css'
import './index.css'

function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-orange-400 flex flex-col justify-between">
      <header className="flex-1 flex items-center justify-center">
        <div className='flex grid items-center rounded-xl p-12 bg-orange-400'>
          
            <img className='flex justify-center' src='/logoRoxo.png' alt='logoroxo'/>

          <h1 className='flex justify-center text-purple-900 text-5xl font-bowlby'>GameChangers</h1>
          <p className='flex justify-center font-open text-purple-900'>Marketplace de troca e venda de Jogos e Cartas</p>
            <button className="font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-4 py-3 m-2 hover:bg-white hover:text-purple-900 transition-colors" onClick={() => navigate('/loginpage')}>FAZER LOGIN</button>
            <button className="font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-4 py-3 m-2 hover:bg-white hover:text-purple-900 transition-colors" onClick={() => navigate('/novaconta')}>CRIAR CONTA</button>
        </div>
      </header>
      <div className='bg-orange-200 flex justify-center w-screen py-4'>
        <button className="font-bowlby flex items-center justify-center border-2 border-purple-900 bg-purple-900 text-white rounded-lg  px-4 py-3 m-2 hover:bg-purple-800 hover:text-orange-400 transition-colors" onClick={() => navigate('/explore')}>CONVIDADO</button>
      </div>
    </div>
  );
}

export default App;
