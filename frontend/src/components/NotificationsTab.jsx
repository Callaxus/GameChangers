import { IoReturnUpBackOutline } from "react-icons/io5";
import OneOfferNotification from "./OneOfferNotification";
import OneNotificationAccepted from "./OneNotificationAccepted";
import OneNotificationRejected from "./OneNotificationRejected";
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
      const navigate = useNavigate();

    return (
        <div>
      <div id='seta' className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }} onClick={() => navigate('/explore') }>
        <IoReturnUpBackOutline size={30}/>
        <h1 className="font-bowlby pl-5 text-right text-4xl text-purple-900">As tuas Notificações</h1>
      </div>
      <div className="mx-2">
      <OneOfferNotification/>
      <OneNotificationAccepted/>
      <OneNotificationRejected/>
      </div>
      </div>
    )
}

