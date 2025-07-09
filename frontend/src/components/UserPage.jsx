import { useState } from "react";
import CardItem from "./CardItem";
import { BsPencilSquare, BsPlusCircle } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";


export default function PerfilUsuario() {
  const [showHistorico, setShowHistorico] = useState(true);

  return (
   

      {/* Perfil */}
      <div className="bg-orange-200 p-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-300 rounded-full w-16 h-16 flex justify-center items-center text-white text-2xl">
            🐵
          </div>
          <div>
               <GoBell className="w-5 h-5" />
            <h2 className="font-bold">USERNAMEDASILVA</h2>
            <p className="text-sm">Gamechanger desde 02/02/2025</p>
          </div>
        </div>

        {/* Dados do Usuário */}
        <div className="mt-4 space-y-2 text-sm">
          <InfoItem label="Email:" value={email} />
          <InfoItem label="Telefone:" value="000123123123" />
          <InfoItem label="Região:" value="Odivelas - Lisboa" />
          <InfoItem label="Senha:" value="********" />
        </div>
      </div>

      {/* Meus Itens */}
      <div className="p-4 "flex space-x-3 overflow-x-auto py-2">
        <div><RiArrowDownSFill title="Meus itens" /></div>

          {[1, 2, 3].map((i) => (
            // <CardItem key={i} />
          ))}
        </div>
      

      {/* Histórico */}
      <div className="p-4">
        <RiArrowDownSFill title="Histórico" onClick={() => setShowHistorico(!showHistorico)} />
        {showHistorico && (
          <div className="bg-white p-2 rounded shadow text-sm space-y-2">
            <div className="flex justify-between items-center">
              <span>Carta XXXXX</span>
              <span>TROCA 
                ✅</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Carta YYYYY</span>
              <span>COMPRA -3,33€</span>
            </div>
          </div>
        )}
      </div>

      {/* Rodapé */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#F8983A] flex justify-around py-3 text-white">
        <MdTravelExplore className="w-6 h-6" />
        <BsPlusCircle className="w-6 h-6" />
        <FaRegUser className="w-6 h-6" />
      </div>
    
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span>
        <strong>{label}</strong> {value}
      </span>
      <BsPencilSquare className="w-4 h-4 text-purple-700" />
    </div>
  );
}

function SectionHeader({ title, onClick }) {
  return (
    <div
      className="bg-purple-800 text-white px-3 py-1 font-bold text-sm rounded-t w-fit cursor-pointer"
      onClick={onClick}
    >
      {title}
    </div>
  );
}


