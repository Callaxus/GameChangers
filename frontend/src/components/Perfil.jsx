import { useState } from 'react';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import EditItem from './EditItem';
import ItemHistorico from './ItemHistorico';
import ProfileEdit from './profileEdit';


function Perfil() {
    const navigate = useNavigate();
    const [showHistorico, setShowHistorico] = useState(false);
    const itensHistorico = ["Item 1", "Item 2", "Item 3"]; // Example items, replace with actual data

    return (

        <div className="bg-white min-h-screen">

            <div id='seta' className='bg-orange-400 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
                <button className='text-purple-900 text-4xl' onClick={() => navigate('/explore')}>
                    <IoReturnUpBackOutline /> 
                </button>
                    <p className='text-purple-900 text-3xl font-bowlby'>GameChangers</p>
            </div>

            <div className='font-bowlby text-purple-900 flex items-center justify-center m-5'>
                <img className=' w-20 h-20 rounded-full me-5' src="https://biografiaresumida.com.br/wp-content/uploads/2017/12/Henry-Cavill.jpg" alt="usuariofoto" />
                <div>
                <p className="text-2xl">Username</p>
                <p className="text-sm font-sans">Data de Criação da Conta</p>
                </div> 
           </div>

            <ProfileEdit/>
            
            <div className=''>
                <div id="meusitens" className='text-white bg-purple-900 font-bowlby p-3 border-2 rounded-lg m-2' >
                    <div id="scrolling-wrapper" className="w-md">
                        <div id="scrolling-wrapper-flexbox" className="w-md text-white pt-[1rem] pb-2">
                            <h1 className="font-bowlby text-lg">Meus Itens </h1>
                            <div className="w-md text-white overflow-x-scroll overflow-y-hidden whitespace-nowrap pl-5 pb-2 scrollbar scrollbar-thumb-orange-300 scrollbar-track-orange-400">
                            </div>
                            carrossel - Itens que o usuario publicou
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between bg-purple-900 text-white font-bowlby text-lg p-3 border-2 rounded-lg m-2'>
                    <h1>Histórico</h1>
                    <RiArrowDownSFill
                        className="text-4xl cursor-pointer "
                        title="Histórico"
                        onClick={() => setShowHistorico(!showHistorico)}
                    />
                </div>

                {showHistorico && (
                    <div id="historico" className='text-white bg-purple-100 p-3 border-2 rounded-lg m-2'>
                        <div>
                            {itensHistorico.map((item, index) => (
                                <ItemHistorico item={item} key={index}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Perfil