'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { Modal } from './modal';

const taxiOptions = [
    { src: '/city_taxi.png', label: 'Такси по городу' },
    { src: '/fly.png', label: 'Такси в аэропорт' },
    { src: '/more.png', label: 'Такси на море' },
    { src: '/VIP.png', label: 'Встреча VIP' },
    { src: '/trezv.png', label: 'Трезвый водитель' },
    { src: '/sluzh.png', label: 'Служебный водитель' },
    { src: '/dostavka.png', label: 'Курьер доставка' },
    { src: '/personal.png', label: 'Доставка персонала' },
    { src: '/avtonana.png', label: 'Авто няня' },
    { src: '/kreslo.png', label: 'Детское кресло' },
    { src: '/jivot.png', label: 'Перевозка дом. животных' },
    { src: '/tariftaxi.png', label: 'Тарифы такси' },
];

const TaxiCard = ({ src, label, onClick }) => (
    <div className="bg-white shadow rounded-3xl lg:w-60 w-full flex flex-col items-center gap-3 py-6 cursor-pointer" onClick={onClick}>
        <Image src={src} width={50} height={50} alt={label} />
        <p className="font-semibold text-center">{label}</p>
        <button className="bg-[#FFCB00] shadow-sm px-5 font-semibold py-2 rounded-md cursor-pointer
            transition duration-200 ease-in-out hover:bg-[#E6B800] hover:shadow-md
            active:bg-[#D9A600] active:shadow-sm">
            Заказать такси
        </button>
    </div>
);


export default function RightBar() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState('');

    const handleCardClick = (label) => {
        setSelectedLabel(label);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="flex items-center flex-col gap-5">
        {taxiOptions.map((option, index) => (
            <TaxiCard key={index} {...option} onClick={() => handleCardClick(option.label)} />
        ))}
        <Modal isOpen={isModalOpen} onClose={closeModal} label={selectedLabel} />
    </div>
    );
}