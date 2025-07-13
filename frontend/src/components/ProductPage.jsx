import react from "react";
import {useState} from "react"; 
import { navigate, useNavigate } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
import product from '../CategoriasImg/magic.png'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";



export default function ProductPage () {
    const navigate = useNavigate();

    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div>
            <div>
                <div id='seta' className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }} onClick={() => navigate('/explore') }>
                    <IoReturnUpBackOutline size={30}/>
                     <h1 className="font-bowlby pl-5 text-right text-4xl text-purple-900">GameChangers</h1>
                </div>
                <img 
                className="w-full" 
                src={product}
                alt=""
                >
                </img>

                <div
                className="text-purple-800 font-semibold flex items-center justify-between m-5">
                    <div
                    className="cursor-pointer"
                    onClick={toggleLike}>
                        {isLiked?(
                            <FaHeart size={30} className="text-red-500"/>
                        ):(
                            <FaRegHeart size={30}/>
                        )}
                    </div>
                    <h1
                    className="text-2xl">
                        Título do Produto
                    </h1>
                    <IoShareSocial 
                    size={30}/>
                </div>

                <div
                className="m-5 flex items-center justify-between">
                    <p className="text-orange-400">#Category #Category</p>
                    <p
                    className="text-2xl text-purple-900">Preço</p>
                </div>

                <div
                className="m-5">
                    <h2
                    className="text-xl font-semibold text-purple-800">
                        Descrição
                    </h2>
                    <p
                    className="text-stone-950">
                        Loren ipsum dolor, lorem super ipsum, lorem lorem
                    </p>
                </div>

                <h2
                className="mx-5 font-semibold text-purple-900">
                    Publicado por
                </h2>

                <div 
                className="mx-5 text-stone-950 flex items-cetner justify-between">
                    <p>username</p>
                    <p>data do post</p>
                </div>

                <div
                className="flex justify-center m-5">
                     <button
                        className="bg-orange-400 text-2xl tracking-wider hover:bg-orange-900/50 border-2 border-orange-800 text-white px-6 py-4 rounded-xl transition-colors font-bowlby w-80 m-5"> 
                            Tenho Interesse
                    </button>
                    
                </div>

            </div>
        </div>
    )
}