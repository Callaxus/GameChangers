import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import EditItem from './EditItem';



function Perfil() {
    const navigate = useNavigate(); 
    const [showHistorico, setShowHistorico] = useState(true);
    const itensHistorico= ["Item 1", "Item 2", "Item 3"]; // Example items, replace with actual data
  
  return (
        <><div id='seta' className='bg-orange-400 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
            <button className='text-purple-900 text-4xl' onClick={() => navigate('/') }><IoReturnUpBackOutline /> </button>
            <p className='text-purple-900 text-3xl font-bowlby'>GameChangers</p>
        </div>
        <div className='bg-orange-100 font-bowlby text-purple-900 flex items-center justify-center p-2'>
            <img src="" alt="" />
            <p>NOME DO USUARIO</p>
        </div>
        <div id='perfiledit' className=" text-purple-900 flex flex-col items-center bg-orange-200 leading-relaxed">

                <EditItem title={"Email"} />
                <EditItem title={"Telefone"}/>
                <EditItem title={"Região"}/>
                <EditItem title={"Senha"}/>
        </div>
        <div id="meusitens" className='text-white w-xs bg-purple-900 font-bowlby text-3xl p-3 border-2 rounded-lg m-2' >

        <div id="scrolling-wrapper"  className="w-md">
            <div id="scrolling-wrapper-flexbox" className="w-md text-white pt-[1rem] pb-2"> 
                <h1 className="font-bowlby text-xl m-2">Seus Itens</h1>
            <div className="w-md text-white overflow-x-scroll overflow-y-hidden whitespace-nowrap pl-5 pb-2 scrollbar scrollbar-thumb-orange-300 scrollbar-track-orange-400">
            </div>
            carrossel - ITENS ATIVOS PARA TROCA OU VENDA
            </div>
      </div>
    </div>
    <div id="historico" className='text-white bg-purple-900 flex-col font-bowlby text-3xl p-3 border-2 rounded-lg m-2 flex'>
       <h1>Histórico</h1> <RiArrowDownSFill title="Histórico" onClick={() => setShowHistorico(!showHistorico)} >
        {showHistorico ? "Esconder Lista" : "Mostrar Lista"}
       </RiArrowDownSFill>
        {showHistorico && (
            <ul>{itensHistorico.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
        )}  
    </div>
</>        
    );};

    export default Perfil