'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "./modal";

export default function FirstBlock() {
    const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="relative min-h-screen w-full">
            <div className="absolute inset-0">
                <Image
                    src="/bg.png"
                    alt="Такси Европа"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row h-full">
                <aside className={`bg-white w-full z-90 md:w-80 flex flex-col space-y-4 fixed md:static h-screen ${menuOpen ? "block" : "hidden md:block"}`}>
                    <div className="flex pt-5 px-5 lg:px-0 items-center lg:justify-center justify-between md:justify-start">
                        <Link href='/'><Image src="/logo.png" alt="Логотип" width={180} height={60} /></Link>
                        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(false)}>
                            ✕
                        </button>
                    </div>
                    <nav className="bg-gray-100 w-full p-6 space-y-2 text-gray-700 text-center md:text-left">
                        <div className="font-bold flex items-center"><Image src="/zakaztaxi.png" width={25} height={25} alt="taxi" />Заказ такси</div>
                        <ul className="space-y-2">
                            <li onClick={() => setModalOpen(true)} className="cursor-pointer border p-3">Заказ онлайн</li>
                            <li className="">Приложение для заказа</li>
                            <li className="">Грузоперевозки</li>
                            <li className="">Доставка</li>
                            <li className="">Такси для бизнеса</li>
                        </ul>
                    </nav>
                    <div className="p-5">
                        <div className="flex items-center gap-2 hover:text-yellow-400">
                            <Image src='/nav1.png' width={25} height={25} alt="taxi" />
                            <Link className="text-xl font-semibold" href='/services'>Услуги такси</Link>
                        </div>
                        <div className="flex items-center gap-2 hover:text-yellow-400">
                            <Image src='/nav2.png' width={25} height={25} alt="taxi" />
                            <Link className="text-xl font-semibold" href='/tariffs'>Тарифы такси</Link>
                        </div>
                        <div className="flex items-center gap-2 hover:text-yellow-400">
                            <Image src='/nav3.png' width={25} height={25} alt="taxi" />
                            <Link className="text-xl font-semibold" href='/contact'>Контакты</Link>
                        </div>
                        <div className="flex items-center gap-2 hover:text-yellow-400">
                            <Image src='/nav4.png' width={25} height={25} alt="taxi" />
                            <Link className="text-xl font-semibold" href='/partners'>Партнерам</Link>
                        </div>
                    </div>
                </aside>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <button className="md:hidden absolute top-4 left-4 text-white text-2xl" onClick={() => setMenuOpen(true)}>
                    ☰
                </button>
                <div className="flex mt-10 flex-col lg:flex-row items-center">
                    <main className="flex-1 flex flex-col justify-center lg:gap-30 items-center md:items-start p-6 md:p-12 text-white text-center md:text-left">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold">ТАКСИ ЕВРОПА</h1>
                            <p className="mt-4 text-xl font-semibold">Одна из крупнейших<br /> в Калининградской области<br /> компаний такси</p>
                            <button onClick={() => setModalOpen(true)} className="mt-6 bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:bg-yellow-500 active:bg-yellow-600 active:scale-95">
                                Заказать такси
                            </button>
                        </div>
                        <div>
                            <p className="mt-6 text-sm opacity-80">Информационный сервис. Услуги оказываются перевозчиками.</p>
                            <button className="mt-2 border cursor-pointer    border-white py-2 px-4 rounded-lg">Написать в администрацию сервиса</button>
                        </div>
                    </main>
                    <div className="w-full m-10 lg:m-0 md:w-96 bg-white/10 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg mt-6 md:mt-0 mx-4 md:mx-0">
                        <div className="flex space-x-4 text-sm">
                            <button className="text-white border-b-2 border-white pb-2 flex-1">Новый заказ</button>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="bg-[#989898] px-5 pb-10 rounded-xl">
                                <input type="text" placeholder="Откуда" className="w-full p-3 bg-inherit border-b border-b-gray-300 focus:outline-none text-white focus:border-b-yellow-400" />
                                <input type="text" placeholder="№ подъезда" className="w-full p-3 bg-inherit border-b border-b-gray-300 focus:outline-none text-white focus:border-b-yellow-400" />
                                <input type="text" placeholder="Куда" className="w-full p-3 bg-inherit border-b border-b-gray-300 focus:outline-none text-white focus:border-b-yellow-400" />
                            </div>
                            <textarea placeholder="Пожелания к заказу" className="w-full p-3 bg-inherit text-gray-300 bg-opacity-80 rounded-xl border border-gray-300 focus:outline-none focus:border-yellow-400"></textarea>
                            <button className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 hover:bg-yellow-500 active:bg-yellow-600 active:scale-95">
                                Заказать такси
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
