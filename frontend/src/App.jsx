import { useNavigate } from 'react-router-dom';
import './App.css'
import './index.css'
import GridMotion from './components/GridMotion.jsx';

export default function App() {
  const navigate = useNavigate();
  const items = [
    'Item 1',
    <div key='jsx-item-1'>Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1620939959519-2089b4a7d529?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    , 'Item 2',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 4',
    <div key='jsx-item-3'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 5',
    <div key='jsx-item-4'>Custom JSX Content</div>,
    'Item 7',
    <div key='jsx-item-5'>Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1531594896955-305cf81269f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'Item 8',
    <div key='jsx-item-6'>Custom JSX Content</div>,
    'Item 10',
    <div key='jsx-item-7'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 11',
    <div key='jsx-item-8'>Custom JSX Content</div>,
    'Item 13',
    <div key='jsx-item-9'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 14',
    // Add more items as needed
  ];
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
      {/* Animação como background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div className="animationBG">
          <GridMotion items={items} />
        </div>
      </div>
      <header className="flex-1 flex items-center justify-center">
        <div className='flex items-center rounded-xl p-12 bg-orange-400 bg-opacity-50'>
          <img className='flex justify-center' src='/logoRoxo.png' alt='logoroxo' />
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
