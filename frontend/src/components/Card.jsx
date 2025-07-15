import React from 'react';

export default function Card({ title, description, price, images, location }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={images || 'https://via.placeholder.com/300'} // fallback image
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-800">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-green-600">€{price}</span>
          <span className="text-sm text-gray-500">{location}</span>
        </div>
      </div>
    </div>
  );
}