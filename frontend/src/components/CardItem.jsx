import React from 'react';
import { MdOutlineChangeCircle } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";



export default function CardItem({name, price, date, location}) {
const navigate = useNavigate();

  return (
    <div 
    className="bg-orange-100 rounded p-2 text-s flex flex-col 
    justify-end"
    onClick={() => navigate('/produto')}>
      <img
        src="https://imgs.search.brave.com/j8DCcsOfTn-MppPwVEJgZngpI701qlXEvB-TDeQZcbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oNW0z/czV0NS5kZWxpdmVy/eS5yb2NrZXRjZG4u/bWUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvQ29sbGVj/dGlvbi1QaG90by1T/YW1wbGVzLTEtMjI1/eDMwMC5qcGc"
        alt=""
        className="max-h-45 rounded-sm"
      ></img>
      <div className="flex-wrap
         place-content-between p-2">
        <h2 className="text-stone-950 font-semibold text-2xl">{name}</h2>
        <div className="flex gap-2 text-purple-950 items-center">  
        <MdOutlineChangeCircle size={30}/>
        <h3 className="font-semibold text-2xl">{price}</h3>
        </div>
        <h4 className="text-stone-950 text-s">{`${location}, ${date}`}</h4>

      </div>
    </div>
  );
}