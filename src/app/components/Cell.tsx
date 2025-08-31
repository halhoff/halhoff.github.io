import React from 'react';

export default function Cell({ alive }: { alive: boolean }) {
  return (
    <div
      className={`w-4 h-4 ${alive ? 'bg-[rgb(30,30,30)]' : 'bg-black'}`}
      style={{
        transition: 'background-color 1s ease-in-out',
      }}
    />
  );
}