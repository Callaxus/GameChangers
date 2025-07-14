import React from 'react';
import { MdOutlineChangeCircle } from "react-icons/md";
import { navigate, useNavigate } from "react-router-dom";



export default function CardItem({img,name, price, date, location}) {
const navigate = useNavigate();

  return (
    <div 
      className="bg-orange-100 rounded m-2 p-2 text-s flex flex-col justify-end"
      onClick={() => navigate('/produto')}
    >
      <img
        className="max-h-45 rounded-sm w-full object-cover"
        src={img}
        alt={name}
      />
      <div className="flex-wrap place-content-between p-2">
        <h2 className="text-stone-950 font-semibold text-2xl">{name}</h2>
        <div className="flex gap-2 text-purple-900 items-center">  
          <MdOutlineChangeCircle size={30}/>
          <h3 className="font-semibold text-2xl">{price}</h3>
        </div>
        <h4 className="text-stone-950 text-s">{`${location}, ${date}`}</h4>
      </div>
    </div>
  );
}