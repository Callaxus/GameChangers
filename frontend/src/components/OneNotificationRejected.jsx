export default function OneNotificationRejected() {
  return (
    <div className="bg-purple-800/10 mt-2 mb-2 p-4 rounded-xl">
      <div className="grid grid-cols-3 gap-4 items-center">
     
        <div className="col-span-2 flex flex-col justify-between h-full">
          <h1 className="font-bowlby text-2xl text-purple-800 mb-2">Oferta Recusada</h1>
          <p className="mb-4">Recusou a oferta de <b>Username</b>.</p>
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