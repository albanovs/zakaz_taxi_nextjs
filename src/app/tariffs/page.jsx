import PrevPage from '@/components/prevPage'
import RightBar from '@/components/rightBar'
import Image from 'next/image'
import React from 'react'

export default function Tariffs() {
    return (
        <div className="lg:mx-30 mt-10 mb-30 mx-5">
            <div className="w-full flex justify-center cursor-pointer">
                <a href="/">
                    <Image src="/logo.png" width={200} height={200} alt='logo' />
                </a>
            </div>
            <PrevPage />
            <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Тарифы такси</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-5 items-start">
                <div className="w-full">
                    <div className="relative">
                        <Image src='/tarif1.png' className='w-full lg:h-100 lg:object-cover' width={1000} height={100} alt='Тариф 1' />
                        <div className=" gap-10 flex flex-col justify-between items-center ">
                            <button className="py-5 mb-10 px-20 shadow-xl lg:text-4xl bg-[#FFCB00] font-bold">Комфорт от 150 руб.</button>
                        </div>
                        <p className='text-xl'>Комфорт от 150 руб. далее 1 км. 20 руб. по городу, 25 руб. межгород. Бесплатное ожидание 3 мин.<br />
                            Почасовая 1000 руб<br />
                            (Шкода рапид, фольксваген поло Кио Рио, Баик ю5 плюс и др. не старше 3 лет.)</p>
                    </div>
                    <div className="relative mt-20">
                        <Image src='/tarif2.png' className='w-full lg:h-100 lg:object-cover' width={1000} height={100} alt='Тариф 1' />
                        <div className=" gap-10 flex flex-col justify-between items-center ">
                            <button className="py-5 px-20 mb-10 shadow-xl lg:text-4xl bg-[#FFCB00] font-bold">Бизнес от 500 руб.</button>
                        </div>
                        <p className='text-xl'>Бизнес от 500 р стоимость 1 км/50 р,<br /> Почасовая 1000 руб (включено 15 км, далее 1км 50 руб)<br /> (Мерседес S класс)</p>
                    </div>
                    <div className="relative mt-20">
                        <Image src='/tarif3.png' className='w-full lg:h-120 lg:object-cover' width={1000} height={100} alt='Тариф 1' />
                        <div className=" gap-10 flex flex-col justify-between items-center ">
                            <button className="py-5 mb-10 px-20 shadow-xl lg:text-4xl bg-[#FFCB00] font-bold">Минивэн от 400 руб.</button>
                        </div>
                        <p className='text-xl'>Минивен от 400 руб стоимость 1 км/40 р <br />Почасовая 900 руб. (включено 15 км, далее 1км 40 руб)<br />(Хундай H1 до 8 человек)</p>
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <RightBar />
                </div>
            </div>
        </div>
    )
}