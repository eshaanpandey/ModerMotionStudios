import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  thumbnail: string;
}

const Card: React.FC<CardProps> = ({ id, title, thumbnail }) => {
  return (
    <Link to={`/project/${id}`} className="block rounded shadow hover:shadow-lg">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-64 object-cover rounded-t"
        loading="lazy"
      />
      <div className="p-4 bg-gray-800 text-white rounded-b">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
