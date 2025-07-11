import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import CardItem from "./CardItem"
import Category from "./CategoryCircle";
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
import nds from "../CategoriasImg/magic.png";
import ds3 from "../CategoriasImg/ds.png";
import pkmimg from "../CategoriasImg/magic.png";
import yghImg from "../CategoriasImg/magic.png";
import plushImg from "../CategoriasImg/magic.png";
import figImg from "../CategoriasImg/magic.png";
import { useNavigate } from 'react-router-dom';


export default function ExplorePage (props){
    
     const navigate = useNavigate();
 
    return (
        <div 
        className="bg-orange-100 w-screen min-h-screen">
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
                className="flex w-full max-w-md rounded-lg p-2">
                    <input 
                    type="text" 
                    id="searchbar" 
                    placeholder="O que procura hoje?" 
                    className="flex-grow px-4 py-2 rounded-l-lg border border-purple-800
                     focus:outline-none text-base">
                    </input>
                        <button
                        type="submit" 
                        className="flex items-center justify-center px-4 py-2 
                        rounded-r-lg border border-purple-800 bg-purple-800
                         text-white hover:bg-purple-900 transition-colors" >
                            <CiSearch size={22}/>
                        </button>
                </form>
            </div>
            <button 
            className="flex items-center justify-center px-4 py-2 text-purple-800 me-2"
            onClick={() => navigate('/notifications')}>
            <GoBell size={30}/>
            </button>
        </div>


        <div id="scrolling-wrapper"  className="w-md">
            <div id="scrolling-wrapper-flexbox" className="w-md bg-orange-400 text-white pt-[1rem] pb-2"> 
                <h1 className="font-bowlby text-2xl tracking-wider m-2 ms-5">Explore as nossas categorias</h1>
            <div className="w-md text-white overflow-x-scroll overflow-y-hidden whitespace-nowrap pl-5 pb-2 scrollbar scrollbar-thumb-orange-300 scrollbar-track-orange-400">
               <button 
               onClick={() => navigate('/categorias')}>
                <Category 
              imgSrc = {'/logoRoxo.png'}
              title = "Todas as Categorias"
              />
              </button>
              <Category 
              imgSrc = {magicImg}
              title = "Magic: The Gathering"/>
              <Category 
              imgSrc = {ps4Img}
              title = "Playstation 4"/>
              <Category 
              imgSrc = {ns2Img}
              title = "Nintendo Switch 2"/>
              <Category 
              imgSrc = {ps5Img}
              title = "Playstation 5"/>
              <Category 
              imgSrc = {nsImg}
              title = "Nintendo Switch"/>
              <Category 
              imgSrc = {xboxsxImg}
              title = "Xbox Series X"/>
              <Category 
              imgSrc = {xbox1Img}
              title = "Xbox One"/>
              <Category 
              imgSrc = {xbox360Img}
              title = "Xbox 360"/>
              <Category 
              imgSrc = {xboxsos}
              title = "Xbox Series OS"/>
              <Category 
              imgSrc = {ps1}
              title = "Playstation 1"/>
              <Category 
              imgSrc = {ps2}
              title = "Playstation 2"/>
              <Category 
              imgSrc = {ps3}
              title = "Playstation 3"/>
              <Category 
              imgSrc = {psp}
              title = "PSP"/>
              <Category 
              imgSrc = {psvita}
              title = "PS Vita"/>
              <Category 
              imgSrc = {nds}
              title = "Nintendo DS"/>
              <Category 
              imgSrc = {ds3}
              title = "Nintendo 3DS"/>
              <Category 
              imgSrc = {pkmimg}
              title = "Cartas Pokemon"/>
              <Category 
              imgSrc = {yghImg}
              title = "Cartas Yu-gi-oh"/>
              <Category 
              imgSrc = {plushImg}
              title = "Peluches"/>
              <Category 
              imgSrc = {figImg}
              title = "Figuras"/>
            </div>
            </div>

            <h1 className="text-purple-900 text-4xl font-bowlby p-5"> Anúncios Populares</h1>
            <div id="cardItemFlex" className="m-2 grid grid-cols-2 gap-2">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        </div>
    </div>

    )
}