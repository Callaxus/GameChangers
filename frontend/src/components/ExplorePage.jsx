import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";

export default function ExplorePage (){
    return (
        <div
        className="flex items-center">
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
    )
}