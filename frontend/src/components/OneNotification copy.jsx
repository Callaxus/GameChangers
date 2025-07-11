export default function OneOfferNotification() {
  return (
    <div className="bg-purple-800/10 mt-2 mb-2 p-4 rounded-xl">
      <div className="grid grid-cols-3 gap-4 items-center">
     
        <div className="col-span-2 flex flex-col justify-between h-full">
          <h1 className="font-bowlby text-2xl text-purple-800 mb-2">Nova Oferta Recebida</h1>
          <p className="mb-4"><b>Username</b> está interessado no seu produto X.</p>
          <div className="flex gap-2">
            <button className="bg-purple-500 font-bold rounded-xl text-white text-lg flex-1">Contactar</button>
            <button className="border-purple-800 font-semibold border-2  rounded-xl text-lg flex-1">Recusar contato</button>
          </div>
        </div>
    
        <div className="flex justify-center items-center h-full">
          <img
            alt="Produto"
            src="https://v.com/80x80.png?text=Produto"
            className="w-20 h-20 object-cover rounded-lg border-2 border-purple-800"
          />
        </div>
      </div>
    </div>
  );
}