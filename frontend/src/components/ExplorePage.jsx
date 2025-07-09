import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
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

export default function ExplorePage (props){
    return (
        <div>
        <div className="flex items-center">
            <div 
            id="search" 
            className="flex justify-center items-center bg-gray-50">
                <form 
                className="flex w-full max-w-md bg-white rounded-lg p-2">
                    <input 
                    type="text" 
                    id="searchbar" 
                    placeholder="O que procura hoje?" 
                    className="flex-grow px-4 py-2 rounded-l-lg border border-orange-400
                     focus:outline-none text-base">
                    </input>
                        <button 
                        type="submit" 
                        className="flex items-center justify-center px-4 py-2 
                        rounded-r-lg border border-orange-400 bg-orange-400
                         text-white hover:bg-orange-500 transition-colors">
                            <CiSearch size={22}/>
                        </button>
                </form>
            </div>
            <button 
            className="flex items-center justify-center px-4 py-2 text-orange-500">
            <GoBell size={22}/>
            </button>
        </div>
         <div id="scrolling-wrapper">
            <div id="scrolling-wrapper-flexbox"> 
                <h1>Explore as nossas categorias</h1>
            <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap">
              <Category 
              imgSrc = {magicImg}
              title = "Magic: The Gathering"/>
              <Category 
              imgSrc = {ps4Img}
              title = "Playstation 4"/>
              <Category 
              imgSrc = {ns2Img}
              title = "Magic: The Gathering"/>
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
        </div>
    </div>
    )
}