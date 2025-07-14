import { useNavigate } from 'react-router-dom';
import { BsPlusCircle } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";


function Nav({ className = "" }) {
  const navigate = useNavigate();
  return (
    <div className={`fixed bottom-0 left-0 w-full z-50 bg-orange-400 p-0 ${className}`}>
      <div className="h-20 w-full flex flex-nowrap justify-around items-center">
        <button onClick={() => navigate('/explore')}>
          <MdTravelExplore className="text-purple-900 text-5xl" />
        </button>
        <button onClick={() => navigate('/criar-anuncio')}>
          <BsPlusCircle className="text-purple-900 text-5xl" />
        </button>
        <button onClick={() => navigate('/perfil')}>
          <FaRegUser className="text-purple-900 text-5xl " />
        </button>
      </div>
    </div>
  );
}

export default Nav;
