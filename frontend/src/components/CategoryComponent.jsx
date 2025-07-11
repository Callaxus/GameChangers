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
import logo from "../CategoriasImg/logoRoxo.png"

export default function Categories(){
return ( 
            <div 
            id="scrolling-wrapper" 
            className="w-md">
                <div 
                id="scrolling-wrapper-flexbox" 
                className="w-md bg-orange-400 text-white pt-[1rem] pb-2">
                    <h1 
                    className="font-bowlby text-2xl tracking-wider m-2 ms-5">
                        Explore as nossas categorias
                    </h1>
                    <div 
                    className="w-md text-white overflow-x-scroll overflow-y-hidden 
                    whitespace-nowrap pl-5 pb-2 scrollbar scrollbar-thumb-purple-800 
                    scrollbar-track-orange-400">
                         <Category
                            imgSrc={logo}
                            title="Todas as Categorias" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={magicImg}
                            title="Magic: The Gathering"
                            link = "/categorias" />
                        <Category
                            imgSrc={ps4Img}
                            title="Playstation 4" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={ns2Img}
                            title="Nintendo Switch 2"
                            link = "/categorias" />
                        <Category
                            imgSrc={ps5Img}
                            title="Playstation 5"
                            link = "/categorias" />
                        <Category
                            imgSrc={nsImg}
                            title="Nintendo Switch"
                            link = "/categorias" />
                        <Category
                            imgSrc={xboxsxImg}
                            title="Xbox Series X" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={xbox1Img}
                            title="Xbox One" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={xbox360Img}
                            title="Xbox 360"
                            link = "/categorias" />
                        <Category
                            imgSrc={xboxsos}
                            title="Xbox Series OS" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={ps1}
                            title="Playstation 1" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={ps2}
                            title="Playstation 2" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={ps3}
                            title="Playstation 3" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={psp}
                            title="PSP" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={psvita}
                            title="PS Vita" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={nds}
                            title="Nintendo DS" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={ds3}
                            title="Nintendo 3DS" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={pkmimg}
                            title="Cartas Pokemon" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={yghImg}
                            title="Cartas Yu-gi-oh" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={plushImg}
                            title="Peluches" 
                            link = "/categorias"/>
                        <Category
                            imgSrc={figImg}
                            title="Figuras" 
                            link = "/categorias"/>
                    </div>
)
        }