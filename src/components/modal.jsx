import React from 'react';

export const Modal = ({ isOpen, onClose, label }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-90">
            <div className="w-full m-10 lg:m-0 md:w-96 bg-white/10 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg mt-6 md:mt-0 mx-4 md:mx-0">
                <div className="flex space-x-4 justify-between text-sm">
                    <button className="text-white pb-2 flex-1">Новый заказ</button>
                    <button onClick={onClose} className="text-white pb-2 text-xl cursor-pointer">X</button>
                </div>
                <div className="mt-4 space-y-4">
                    <div className="bg-[#989898] px-5 pb-10 rounded-xl">
                        <input type="text" placeholder="Откуда" className="w-full p-3 bg-inherit border-b border-b-gray-300 focus:outline-none text-white focus:border-b-yellow-400" />
                        <input type="text" placeholder="№ подъезда" className="w-full p-3 bg-inherit border-b border-b-gray-300 focus:outline-none text-white focus:border-b-yellow-400" />
                        <input type="text" placeholder="Куда" className="w-full p-3 bg-inherit border-b border-b-gray-300 focus:outline-none text-white focus:border-b-yellow-400" />
                    </div>
                    <textarea placeholder="Пожелания к заказу" className="w-full p-3 bg-inherit text-gray-300 bg-opacity-80 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-400"></textarea>
                    <button onClick={onClose} className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:bg-yellow-500 active:bg-yellow-600 active:scale-95">
                        Заказать такси
                    </button>
                </div>
            </div>
        </div>
    );
};
