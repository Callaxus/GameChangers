import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import CardItem from "./CardItem"
import Category from "./CategoryCircle";
import { useNavigate } from "react-router-dom";
import magicImg from "../CategoriasImg/magicteh.png";
import ps4Img from "../CategoriasImg/ps4.png";
import ns2Img from "../CategoriasImg/ns2.png";
import ps5Img from "../CategoriasImg/ps5.png";
import nsImg from "../CategoriasImg/ns.png";
import xboxsxImg from "../CategoriasImg/xboxsx.png";
import xbox1Img from "../CategoriasImg/xbox1.png";
import xbox360Img from "../CategoriasImg/xbox360.png";
import xboxsos from "../CategoriasImg/xboxsos.png";
import ps1 from "../CategoriasImg/ps1.png";
import ps2 from "../CategoriasImg/ps2.png";
import ps3 from "../CategoriasImg/ps3.png";
import psp from "../CategoriasImg/psp.png";
import psvita from "../CategoriasImg/vita.png";
import ds3 from "../CategoriasImg/ds.png";
import yugio from "../CategoriasImg/yugio.png"
import pokemon from "../CategoriasImg/pokemon.png"
import nintendods from "../CategoriasImg/nintendods.png"
import figure from "../CategoriasImg/figure.png"
import plush from "../CategoriasImg/plush.png"
import logo from "../CategoriasImg/logoRoxo.png"
import { BiSolidCategoryAlt } from "react-icons/bi";


import { useState, useEffect } from "react";

export default function ExplorePage(props) {
    const navigate = useNavigate();
    const [usuarioLogado, setUsuarioLogado] = useState(false);
    const [anuncios, setAnuncios] = useState([]);
    const [count, setCount] = useState([]);

    const teste = [
        { img: "https://i.redd.it/i-made-some-hollow-knight-themed-mtg-cards-apologies-in-v0-0nsny04456cb1.png?width=1500&format=png&auto=webp&s=eacb3d8ea75c099a0965d7c42ff30fd213470cdb",
          name: "Carta 1", price: "10€", location: "Lisboa", date: "há 2 dias" },
        { img:"https://i.pinimg.com/474x/7e/e1/90/7ee19061c0c59246ac23ee1ea88a6d76.jpg",
            name: "Carta 2", price: "20€", location: "Braga", date: "há 20 dias" },
        { img: "https://a-static.mlcdn.com.br/1500x1500/jogo-game-fifa-23-br-para-xbox-one-midia-fisica-ea-sports/bunkertech/fifa23xbox/7a4b8312ef4ccd25a33e62a82f829b16.jpeg",
            name: "Jogo 3", price: "15€", location: "Queluz", date: "há 15 dias" },
        { img:"https://a-static.mlcdn.com.br/800x560/jogo-mario-kart-8-deluxe-nintendo-switch-midia-fisica-nitendo/bunkertech/118383b/62985fe0fd789b1d212e1b71ea3484ae.jpeg",
            name: "Jogo 4", price: "30€", location: "Porto", date: "há 0 dias" },
    ]
            useEffect(() => {
                const fetchNotificationCount = async () => {
                try {
                    const response = await fetch('/api/notifications/count', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth setup
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        setCount(data.count);
                    }
                } catch (error) {
                    console.error('Failed to fetch notification count:', error);
                    setCount(0);
                }
            };

    fetchNotificationCount();
}, [])
   

    return (
        <div
            className="bg-white w-screen min-h-screen">
            <h2
                className="font-bowlby pt-5 pr-4 text-right text-4xl text-purple-800">
                Gamechangers
            </h2>
            <div
                id="top bar"
                className="w-full mb-[1rem] ms-2 flex items-center max-w-430 place-content-between">
                <div
                    id="search"
                    className="flex-1 flex justify-center items-center">
                    <form
                        className="flex w-full max-w-md rounded-lg p-2 ms-1">
                        <input
                            type="text"
                            id="searchbar"
                            placeholder="O que procura hoje?"
                            className="flex-grow  px-4 py-2 h-full rounded-l-lg border border-purple-800
                     focus:outline-none text-base">
                        </input>
                        <button
                            type="submit"
                            className="flex text-start items-center justify-center px-4 py-2 
                        rounded-r-lg border border-purple-800 bg-purple-800
                         text-white hover:bg-purple-900 transition-colors">
                            <CiSearch size={22} />
                        </button>
                    </form>
                </div>
                <button
                    className="flex items-center justify-center px-4 py-2 text-purple-800 me-2 relative"
                    onClick = {() => navigate('/notifications')}>
                    <GoBell size={30} />
                     {count > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
                                 {count > 99 ? '99+' : count}
                            </span>
                    )}
                </button>
            </div>
           

            <div 
            id="scrolling-wrapper" 
            className="w-md">
                <div 
                id="scrolling-wrapper-flexbox" 
                className="w-md bg-orange-400 text-white pt-[1rem] pb-2">
                    <h1 
                    className="font-bowlby text-2xl m-2 ms-5">
                        Explore as nossas categorias
                    </h1>
                    <div 
                    className="w-md text-white overflow-x-scroll overflow-y-hidden 
                    whitespace-nowrap pl-5 pb-2 scrollbar scrollbar-thumb-purple-800 
                    scrollbar-track-orange-400">

                        {/*all categories*/}
                             <div className="inline-block">
                                    <button className="p-2 flex flex-col items-center" onClick={() => navigate("/categorias")}>
                                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center relative">
                                            <BiSolidCategoryAlt size={40} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                        <p className="w-20 text-center text-s break-words mt-2 whitespace-normal font-semibold">
                                            Todas as Categorias
                                        </p>
                                    </button>
                                </div>

                        {/*filter thru categories */}
                        <Category
                            imgSrc={magicImg}
                            title="Magic: The Gathering"
                            link = "/categorias/cartas-magic" />
                        <Category
                            imgSrc={ps4Img}
                            title="Playstation 4" 
                            link = "/categorias/ps4"/>
                        <Category
                            imgSrc={ns2Img}
                            title="Nintendo Switch 2"
                            link = "/categorias/nintendo-switch-2" />
                        <Category
                            imgSrc={ps5Img}
                            title="Playstation 5"
                            link = "/categorias/ps5" />
                        <Category
                            imgSrc={nsImg}
                            title="Nintendo Switch"
                            link = "/categorias/nintendo-switch" />
                        <Category
                            imgSrc={xboxsxImg}
                            title="Xbox Series X" 
                            link = "/categorias/xboxsx"/>
                        <Category
                            imgSrc={xbox1Img}
                            title="Xbox One" 
                            link = "/categorias/xboxOne"/>
                        <Category
                            imgSrc={xbox360Img}
                            title="Xbox 360"
                            link = "/categorias/xbox360" />
                        <Category
                            imgSrc={xboxsos}
                            title="Xbox Series OS" 
                            link = "/categorias/xboxsos"/>
                        <Category
                            imgSrc={ps1}
                            title="Playstation 1" 
                            link = "/categorias/ps1"/>
                        <Category
                            imgSrc={ps2}
                            title="Playstation 2" 
                            link = "/categorias/ps2"/>
                        <Category
                            imgSrc={ps3}
                            title="Playstation 3" 
                            link = "/categorias/ps3"/>
                        <Category
                            imgSrc={psp}
                            title="PSP" 
                            link = "/categorias/psp"/>
                        <Category
                            imgSrc={psvita}
                            title="PS Vita" 
                            link = "/categorias/ps-vita"/>
                        <Category
                            imgSrc={nintendods}
                            title="Nintendo DS" 
                            link = "/categorias/nintendo-ds"/>
                        <Category
                            imgSrc={ds3}
                            title="Nintendo 3DS" 
                            link = "/categorias/nintendo-3ds"/>
                        <Category
                            imgSrc={pokemon}
                            title="Cartas Pokemon" 
                            link = "/categorias/cartas-pokemon"/>
                        <Category
                            imgSrc={yugio}
                            title="Cartas Yu-gi-oh" 
                            link = "/categorias/cartas-yugioh"/>
                        <Category
                            imgSrc={plush}
                            title="Peluches" 
                            link = "/categorias/peluches"/>
                        <Category
                            imgSrc={figure}
                            title="Figuras" 
                            link = "/categorias/figuras"/>
                    </div>
                </div>

                <h1 className="text-purple-900 text-4xl font-bowlby p-5"> Anúncios Populares</h1>
                <div
                    id="cardItemFlex"
                    className="m-2 grid grid-cols-2 gap-2 shadow-xl rounded-xl bg-white "
                >
                    {teste.map((item, index) => (
                        <div
                            key={index}
                        >
                            <CardItem
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                date={item.date}
                                location={item.location}
                                onClick={() => navigate('/produto/$produtoID')}
                            />
                        </div>
                    ))}
                </div>

                {/* Só mostra se NÃO estiver logado */}
                {!usuarioLogado && (
                    <div id='criarContaNav' className='fixed bottom-0 left-0 bg-orange-400 p-2 h-min w-full text-center' >
                        <button className='font-bowlby border-2 border-purple-900 bg-purple-900 text-white rounded-lg px-20 py-2 m-2 w-72 hover:bg-white hover:text-purple-900 transition-colors' onClick={() => navigate('/novaconta')}>Criar Conta</button>
                    </div>
                )}
              
            </div>
           
        </div>
    );
}