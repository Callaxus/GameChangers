import React from 'react';

function CardItem() {
  return (
    <div className="w-32 h-36 bg-gray-200 rounded p-2 text-xs flex flex-col justify-end">
      <div className="text-purple-800 font-semibold">Carta Muito Boa</div>
      <div>3,33€</div>
      <div className="text-gray-600">Troca ou Venda</div>
    </div>
  );
}