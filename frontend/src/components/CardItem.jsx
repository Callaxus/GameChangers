import React from 'react';

export default function CardItem() {
  return (
    <div className="bg-orange-200 rounded p-2 text-s flex flex-col justify-end">
      <img
      src="https://imgs.search.brave.com/j8DCcsOfTn-MppPwVEJgZngpI701qlXEvB-TDeQZcbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oNW0z/czV0NS5kZWxpdmVy/eS5yb2NrZXRjZG4u/bWUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvQ29sbGVj/dGlvbi1QaG90by1T/YW1wbGVzLTEtMjI1/eDMwMC5qcGc"
      alt=""
      className="max-h-45 rounded-sm"
      ></img> 
        <div className="flex-wrap
         place-content-between p-2">
        <h2 className="text-stone-950 font-semibold text-2xl">Carta Muito Boa</h2>
        <h3 className="text-purple-950 font-semibold text-2xl">3,33€</h3>
        <h4 className="text-stone-950 text-s">Lisboa, há 5 dias</h4>
        <h4 className="text-white font-bowlby text-xl bg-orange-500 mt-2 p-1 rounded-xl text-center">Para Venda</h4>
        <h4 className="text-white font-bowlby text-xl bg-purple-800 mt-2 p-1 rounded-xl text-center">Para Troca</h4>
      </div>
    </div>
  );
}