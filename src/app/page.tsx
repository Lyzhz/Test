'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCoffee,
  FaChromecast,
  FaLock,
  FaDatabase,
  FaCameraRetro,
} from 'react-icons/fa';

const TABS = [
  { name: 'SCA', icon: FaChromecast },
  { name: 'Refeitório', icon: FaCoffee },
  { name: 'Lockers', icon: FaLock },
  { name: 'Dados', icon: FaDatabase },
  { name: 'Facial', icon: FaCameraRetro },
] as const;

export default function FancyTabBar() {
  const [selected, setSelected] = useState(2);
  const tabWidth = 800 / TABS.length;
  const center = selected * tabWidth + tabWidth / 2;

  const handleImageClick = () => {
    alert('Imagem clicada! Pode abrir perfil, menu, etc...');
  };

  return (
    <>
      {/* HEADER SIMPLES */}
      <div className="w-full h-40 max-w-[800px] mx-auto px-4 py-3 flex items-center justify-between bg-gray-300  shadow-md border-b border-gray-700">
        <button onClick={handleImageClick}>
          <img
            src="https://placekitten.com/40/40"
            alt="Logo ou avatar"
            className="w-10 h-10 rounded-full border border-gray-500 hover:opacity-80 transition"
          />
        </button>
        <h1 className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold pointer-events-none">test</h1>
      </div>

      {/* TAB BAR */}
      <div className="tab-wrapper fixed bottom-0 w-full h-[100px] bg-transparent z-50">
        <svg width="100%" height="100" viewBox="0 0 800 100" className="absolute bottom-0 left-0">
          <motion.path
            initial={false}
            animate={{
              d: `
                M0,0
                H${center - 100}
                C${center - 50},0 ${center - 50},40 ${center},40
                C${center + 50},40 ${center + 50},0 ${center + 100},0
                H800
                V100
                H0
                Z
              `,
            }}
            transition={{ duration: 0.1 }}
            fill="#1a1a1a"
          />
        </svg>

        <div
          className="absolute top-[-8px] text-blue-400 text-4xl"
          style={{ left: `${center - 19}px` }}
        >
          {React.createElement(TABS[selected].icon)}
        </div>

        <div className="flex justify-around items-center h-full relative">
          {TABS.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setSelected(index)}
              className={`flex flex-col items-center justify-center w-[100px] transition-all duration-300 cursor-pointer z-10 ${
                selected === index
                  ? 'text-blue-400 scale-110 -translate-y-[-10%]'
                  : 'text-gray-400'
              }`}
            >
              {selected !== index && React.createElement(tab.icon, { size: 25 })}
              <span className="text-[15px] mt-1">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}