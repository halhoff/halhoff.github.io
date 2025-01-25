import React from 'react';
import { Link } from 'react-router-dom';
import '../global.css';

export default function Card({ title, content, icon, to }) {
  return (
    <Link to={to}>
      <div className="w-96 sm:w-96 md:w-80 lg:w-80 xl:w-96 h-full m-2 p-2 rounded border border-[rgb(51,51,51)] hover:bg-[rgb(20,20,20)] ease-in-out duration-300">
        <div className="font-bold text-2xl bg-gradient-to-b from-white to-[rgb(130,130,130)] bg-clip-text text-transparent
       bg-gradient-to-b from-white to-[rgb(130,130,130)] bg-clip-text text-transparent">
          <div className="text-3xl mb-1 align-middle mr-2 material-icons">
            {icon}
          </div>
          {title}
        </div>
        <div>
          {content}
        </div>
      </div>
    </Link>
  );
}