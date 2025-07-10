import { IoReturnUpBackOutline } from "react-icons/io5";
import OneNotificationAccept from "./OneNotification";

export default function Notifications() {
    return (
        <div>
      <div id='seta' className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
        <IoReturnUpBackOutline size={30}/>
        <h1 className="font-bowlby pl-5 text-right text-2xl text-purple-800">As tuas Notificações</h1>
      </div>
      <OneNotificationAccept/>
      </div>
    )
}