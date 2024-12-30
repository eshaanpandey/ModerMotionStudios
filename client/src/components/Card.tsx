import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  thumbnail: string;
  year: number;
}

const Card: React.FC<CardProps> = ({ id, title, thumbnail, year }) => {
  return (
    <Link
      to={`/project/${id}`}
      className="group block rounded-lg shadow-lg hover:shadow-2xl relative transition-all duration-300"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover rounded-t-lg"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-white bg-opacity-85 dark:bg-gray-900 dark:bg-opacity-85 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-700 dark:text-gray-300 mt-2">{year}</span>
      </div>
    </Link>
  );
};

export default Card;
