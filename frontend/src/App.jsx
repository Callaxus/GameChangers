import { useNavigate } from 'react-router-dom';
import './App.css';
import GridMotion from './components/GridMotion.jsx';
import './index.css';

export default function App() {
  const navigate = useNavigate();
  const items = [
    "https://i0.statig.com.br/bancodeimagens/9y/vn/b1/9yvnb1x235x8le8ri4h5i5xm0.jpg",
    "https://a-static.mlcdn.com.br/800x560/lote-90-cartas-flesh-and-blood-aleatorias-3-copias-de-cada-legends-story/baraogeekhouse/lote90fab/bf4aa41dd26cd0d940c9654c3de72534.jpeg",
    "https://i.etsystatic.com/31956167/r/il/d4b08d/4386814774/il_570xN.4386814774_f4c8.jpg",
    "https://cndl.org.br/varejosa/wp-content/uploads/2023/11/shutterstock_1918705145-1140x694-1.jpg",
    "https://images.unsplash.com/photo-1531594896955-305cf81269f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1620939959519-2089b4a7d529?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://www.conjur.com.br/img/b/card-magic-gathering-rpg.png",
    "https://down-br.img.susercontent.com/file/br-11134201-23030-a3o8t01jfqove5",
    "https://images.unsplash.com/photo-1620939959519-2089b4a7d529?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.borainvestir.b3.com.br/2023/04/14141725/como-os-jogos-de-videogame-podem-te-ajudar-na-educacao-financeira.jpg",
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://portugalglobal.pt/media/yv5aaouc/videojogos.jpg?quality=80&rnd=1338728650868700000",
    "https://cndl.org.br/varejosa/wp-content/uploads/2023/11/shutterstock_1918705145-1140x694-1.jpg",
    "https://down-br.img.susercontent.com/file/br-11134201-23030-a3o8t01jfqove5",
    "https://i.ytimg.com/vi/cVemCXbXfxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCt_RczJO5n6b74O5MWV9MzHo_zQ",
    "https://images.unsplash.com/photo-1531594896955-305cf81269f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://th.bing.com/th/id/R.41e73f05a529828dda590fd6159e38f6?rik=jDsaS4iCbjZEAw&pid=ImgRaw&r=0",
    "https://i.pinimg.com/736x/4e/51/28/4e5128b4d821ab50690708f582726307--game-cards-card-games.jpg",
    "https://images.unsplash.com/photo-1620939959519-2089b4a7d529?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://portugalglobal.pt/media/yv5aaouc/videojogos.jpg?quality=80&rnd=1338728650868700000",
    "https://cndl.org.br/varejosa/wp-content/uploads/2023/11/shutterstock_1918705145-1140x694-1.jpg",
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNQTmsh2jqbGSRYJHjYE76a4nNhf51vMLwQLhqQX60Aubqa51QLsuVZNtCe4LOhno4GHwIsFTPjsPTMnZvOJVVrLBipygC0SyBM7DipifILSSFffL3M_pgHNSLe-ELqhJO-MzVtwM6O11P0ONzGyMkorXvDjtdGNwK91wi1zUTxLaddquhXORZEvBH/s16000-rw/CARTAS%20DE%20POK%C3%89MON.png",
    "https://www.conjur.com.br/img/b/card-magic-gathering-rpg.png",
    "https://cdn.borainvestir.b3.com.br/2023/04/14141725/como-os-jogos-de-videogame-podem-te-ajudar-na-educacao-financeira.jpg",
    "https://images.unsplash.com/photo-1531594896955-305cf81269f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
        <div className="w-full h-full">
          <GridMotion items={items} />
        </div>
      </div>
      <div className='flex flex-col justify-center m-4 items-center rounded-xl bg-orange-400 bg-opacity-40'>
        <img className='flex justify-center' src='/logoRoxo.png' alt='logoroxo' />
        <h1 className='flex justify-center text-purple-900 text-5xl font-bowlby'>GameChangers</h1>
        <h2 className='flex justify-center text-2xl font-open font-blod text-purple-900 p-4 '>Marketplace de troca e venda de jogos e cartas</h2>
        <button className="font-bowlby w-1/2 border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-4 py-3 m-2 hover:bg-white hover:text-purple-900 transition-colors" onClick={() => navigate('/loginpage')}>Fazer Login</button>
        <button className="font-bowlby w-1/2 border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-4 py-3 m-2 hover:bg-white hover:text-purple-900 transition-colors" onClick={() => navigate('/novaconta')}>Criar Conta</button>
        <button className="font-bowlby w-1/2 border-2 border-orange-400 bg-orange-400 text-center mt-24 flex justify-center  text-white rounded-lg p-3 m-2 hover:bg-white hover:text-orange-400 transition-colors" onClick={() => navigate('/explore')}>Convidado</button>
      </div>
    </div>
  );
}
