import { useState } from "react";
import { BsPencilSquare, GoBell } from "react-icons/bs";


export default function PerfilUsuario() {
  const [showHistorico, setShowHistorico] = useState(true);

  return (
   

      {/* Perfil */}
      <div className="bg-[#f8f4ec] p-4">
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
      <div className="p-4">
        <SectionHeader title="MEUS ITENS" />
        <div className="flex space-x-3 overflow-x-auto py-2">
          {[1, 2, 3].map((i) => (
            <CardItem key={i} />
          ))}
        </div>
      </div>

      {/* Histórico */}
      <div className="p-4">
        <SectionHeader title="HISTÓRICO" onClick={() => setShowHistorico(!showHistorico)} />
        {showHistorico && (
          <div className="bg-white p-2 rounded shadow text-sm space-y-2">
            <div className="flex justify-between items-center">
              <span>Carta XXXXX</span>
              <span>TROCA ✅</span>
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
        <History className="w-6 h-6" />
        <PlusCircle className="w-6 h-6" />
        <User className="w-6 h-6" />
      </div>
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

function CardItem() {
  return (
    <div className="w-32 h-36 bg-gray-200 rounded p-2 text-xs flex flex-col justify-end">
      <div className="text-purple-800 font-semibold">Carta Muito Boa</div>
      <div>3,33€</div>
      <div className="text-gray-600">Troca ou Venda</div>
    </div>
  );
}
