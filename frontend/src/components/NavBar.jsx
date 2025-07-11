import { useNavigate } from 'react-router-dom';
import { BsPlusCircle } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";


function Nav() {
  const navigate = useNavigate();
  return (
<div className="h-20 w-full bg-orange-400 flex flex-nowrap justify-around items-center">
    <button onClick={() => navigate('/explore')}>
<MdTravelExplore className="text-purple-900 text-5xl" />
    </button>
    <button onClick={() => navigate('/NOVOARTIGO')}>
<BsPlusCircle className="text-purple-900 text-5xl" />
    </button>
     <button onClick={() => navigate('/userpage')}>
<FaRegUser className="text-purple-900 text-5xl " />
     </button>
</div>

          );
}

export default Nav;
