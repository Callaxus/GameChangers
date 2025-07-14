import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";
import ListaCat from './UmaCategoriaLista.jsx';


import magicImg from "../CategoriasImg/magic.png";
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

import { FaArrowDownShortWide } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


// Check if categorySlug is received correctly


export default function Categorias() {

     const { categorySlug } = useParams();
     const navigate = useNavigate();
     const [filteredItems, setFilteredItems] = useState([]);

     const handleCategoryClick = (categoryName) => {
          const categorySlug = categoryName.replace(/\s+/g, '-').toLowerCase();
          navigate((`/category/${categorySlug}`), {
               state: { categoryName },
          })
     }
     const allItems = []

     useEffect((props) => {
          const filtered = allItems.filter(item => item.category === categorySlug);
          setFilteredItems(filtered);
     }, [categorySlug]);

     return (
          <div>
               <div>
                    <div id='seta' className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }} onClick={() => navigate('/explore')}>
                         <IoReturnUpBackOutline size={30} />
                         <h1 className="font-bowlby pl-5 text-right text-4xl text-purple-900">Todas as Categorias</h1>
                    </div>
               </div>
               <div>
                    <div className="flex items-center text-purple-800 ">
                         <button className="text-2xl font-bowlby pt-5 pl-5 p-2">Jogos de Cartas</button>
                         <FaArrowDownShortWide size={30} className="mt-3" />
                    </div>

                    <ListaCat
                         imgSrc={magicImg}
                         title="Magic: The Gathering"
                         onClick={() => handleCategoryClick("magic-the-gathering")} />
                    <ListaCat
                         imgSrc={pokemon}
                         title="Cartas Pokemon"
                         onClick={() => handleCategoryClick("cartas-pokemon")} />

                    <ListaCat
                         imgSrc={yugio}
                         title="Cartas Yu-gi-oh"
                         onClick={() => handleCategoryClick("cartas-yu-gi-oh")} />

                    <div className="flex items-center text-purple-800">

                         <button className=" text-2xl font-bowlby pt-5 pl-5 p-2">Jogos de Consola</button>
                         <FaArrowDownShortWide size={30} className="mt-3" />
                    </div>

                    <ListaCat
                         imgSrc={ps4Img}
                         title="Playstation 4"
                         onClick={() => handleCategoryClick("playstation-4")} />
                    <ListaCat
                         imgSrc={ns2Img}
                         title="Nintendo Switch 2"
                         onClick={() => handleCategoryClick("nintendo-switch-2")} />
                    <ListaCat
                         imgSrc={ps5Img}
                         title="Playstation 5"
                         onClick={() => handleCategoryClick("playstation-5")} />
                    <ListaCat
                         imgSrc={nsImg}
                         title="Nintendo Switch"
                         onClick={() => handleCategoryClick("nintendo-switch")} />
                    <ListaCat
                         imgSrc={xboxsxImg}
                         title="Xbox Series X"
                         onClick={() => handleCategoryClick("xbox-series-x")} />
                    <ListaCat
                         imgSrc={xbox1Img}
                         title="Xbox One"
                         onClick={() => handleCategoryClick("xbox-one")} />
                    <ListaCat
                         imgSrc={xbox360Img}
                         title="Xbox 360"
                         onClick={() => handleCategoryClick("xbox-360")} />
                    <ListaCat
                         imgSrc={xboxsos}
                         title="Xbox Series OS"
                         onClick={() => handleCategoryClick("xbox-series-os")} />
                    <ListaCat
                         imgSrc={ps1}
                         title="Playstation 1"
                         onClick={() => handleCategoryClick("playstation-1")} />
                    <ListaCat
                         imgSrc={ps2}
                         title="Playstation 2"
                         onClick={() => handleCategoryClick("playstation-2")} />
                    <ListaCat
                         imgSrc={ps3}
                         title="Playstation 3"
                         onClick={() => handleCategoryClick("playstation-3")} />
                    <ListaCat
                         imgSrc={psp}
                         title="PSP"
                         onClick={() => handleCategoryClick("psp")} />
                    <ListaCat
                         imgSrc={psvita}
                         title="PS Vita"
                         onClick={() => handleCategoryClick("ps-vita")} />
                    <ListaCat
                         imgSrc={nintendods}
                         title="Nintendo DS"
                         onClick={() => handleCategoryClick("nintendo-ds")} />
                    <ListaCat
                         imgSrc={ds3}
                         title="Nintendo 3DS"
                         onClick={() => handleCategoryClick("nintendo-3ds")} />
                    <div className="flex items-center text-purple-800">
                         <button className="text-2xl font-bowlby pt-5 pl-5 p-2">Colecionáveis</button>
                         <FaArrowDownShortWide size={30} className="mt-3" />
                    </div>
                    <ListaCat
                         imgSrc={plush}
                         title="Peluches"
                         onClick={() => handleCategoryClick("peluches")} />
                    <ListaCat
                         imgSrc={figure}
                         title="Figuras"
                         onClick={() => handleCategoryClick("figuras")} />
               </div>
          </div>
     )
}