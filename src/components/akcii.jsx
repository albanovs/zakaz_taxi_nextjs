import React from 'react'

export default function Akcii() {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20'>Акции</h1>
            <div className="flex flex-col lg:flex-row gap-5 mt-10">
                <div className="bg-white shadow rounded-3xl w-full py-10 px-5">
                    <h3 className='text-[#FFCB00] font-semibold text-xl mb-2'>Счастливый час</h3>
                    <p className='font-semibold'>Скидка 10 % на поездки в течение определённого времени суток.
                        Например, с 18:00 до 20:00 или с 22:00 до 00:00</p>
                </div>
                <div className="bg-white shadow rounded-3xl w-full py-10 px-5">
                    <h3 className='text-[#FFCB00] font-semibold text-xl mb-2'>Тариф выходного дня</h3>
                    <p className='font-semibold'>Снижение стоимости поездок в выходные и праздничные дни.
                        Это сделает такси более доступным для людей, которые хотят отдохнуть и развлечься</p>
                </div>
            </div>
        </div>
    )
}
