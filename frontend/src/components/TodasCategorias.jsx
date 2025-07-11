import { useNavigate } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";
import ListaCat from './UmaCategoriaLista';
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
import { FaArrowDownShortWide } from "react-icons/fa6";


export default function Categorias(){
     const navigate = useNavigate();
    return (
        <div>
             <div>
                  <div id='seta' className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }} onClick={() => navigate('/explore') }>
                    <IoReturnUpBackOutline size={30}/>
                    <h1 className="font-bowlby pl-5 text-right text-4xl text-purple-900">Todas as Categorias</h1>
                  </div>
             </div>
                    <div>
                              <div className="flex items-center text-purple-800 ">
                                   <button className="text-2xl font-bowlby pt-5 pl-5 p-2">Jogos de Cartas</button>
                                   <FaArrowDownShortWide size={30} className="mt-3"/>
                              </div>

                              <ListaCat 
                             imgSrc = {magicImg}
                             title = "Magic: The Gathering"/>
                              <ListaCat  
                             imgSrc = {pkmimg}
                             title = "Cartas Pokemon"/>
                             <ListaCat  
                             imgSrc = {yghImg}
                             title = "Cartas Yu-gi-oh"/>

                              <div className="flex items-center text-purple-800">  
                              
                                   <button className=" text-2xl font-bowlby pt-5 pl-5 p-2">Jogos de Consola</button>
                                   <FaArrowDownShortWide size={30} className="mt-3"/>
                              </div>

                             <ListaCat  
                             imgSrc = {ps4Img}
                             title = "Playstation 4"/>
                             <ListaCat  
                             imgSrc = {ns2Img}
                             title = "Nintendo Switch 2"/>
                             <ListaCat  
                             imgSrc = {ps5Img}
                             title = "Playstation 5"/>
                             <ListaCat  
                             imgSrc = {nsImg}
                             title = "Nintendo Switch"/>
                             <ListaCat  
                             imgSrc = {xboxsxImg}
                             title = "Xbox Series X"/>
                             <ListaCat  
                             imgSrc = {xbox1Img}
                             title = "Xbox One"/>
                             <ListaCat  
                             imgSrc = {xbox360Img}
                             title = "Xbox 360"/>
                             <ListaCat  
                             imgSrc = {xboxsos}
                             title = "Xbox Series OS"/>
                             <ListaCat  
                             imgSrc = {ps1}
                             title = "Playstation 1"/>
                             <ListaCat  
                             imgSrc = {ps2}
                             title = "Playstation 2"/>
                             <ListaCat  
                             imgSrc = {ps3}
                             title = "Playstation 3"/>
                             <ListaCat  
                             imgSrc = {psp}
                             title = "PSP"/>
                             <ListaCat  
                             imgSrc = {psvita}
                             title = "PS Vita"/>
                             <ListaCat  
                             imgSrc = {nds}
                             title = "Nintendo DS"/>
                             <ListaCat  
                             imgSrc = {ds3}
                             title = "Nintendo 3DS"/>
                         <div className="flex items-center text-purple-800">
                                   <button className="text-2xl font-bowlby pt-5 pl-5 p-2">Colecionáveis</button>
                                   <FaArrowDownShortWide size={30} className="mt-3"/>
                         </div>
                             <ListaCat  
                             imgSrc = {plushImg}
                             title = "Peluches"/>
                             <ListaCat  
                             imgSrc = {figImg}
                             title = "Figuras"/>
                             </div>
 </div>
    )
}