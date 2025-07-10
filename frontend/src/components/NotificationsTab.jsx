import { IoReturnUpBackOutline } from "react-icons/io5";

export default function Notification() {
    return (
        <div>
      <div id='seta' className='bg-orange-400 align-center text-purple-800 p-2 flex items-center justify-between' style={{ height: '15vh' }}>
        <IoReturnUpBackOutline size={30}/>
        <h1 className="font-bowlby pl-5 text-right text-2xl text-purple-800">As tuas Notificações</h1>
      </div>
      
    <div 
    className="bg-purple-800/10 mt-2 mb-2">
    <h1>Oferta Recebida</h1>
    <h2>Username</h2>
    <p> Está interessado no seu produto! Inicie uma conversa para começar a fazer o negócio.
    </p>
    <button>Contactar</button> 
     (mailto:@assaldask) or redirect for phone 
    </div>
    <div 
    className="div">
        Notif2
    </div>
    <div 
    className="div">
        Notif3
    </div>
    <div 
    className="div">
        Notif4
    </div>
    <div className="div">Notif5</div>
    <div className="div">Notif6</div>

      </div>
    )
}