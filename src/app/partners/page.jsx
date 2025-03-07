import PrevPage from '@/components/prevPage'
import RightBar from '@/components/rightBar'
import Image from 'next/image'
import React from 'react'

export default function Partners() {
    return (
        <div className="lg:mx-30 mt-10 mb-30 mx-5">
            <div className="w-full flex justify-center cursor-pointer">
                <a href="/">
                    <Image src="/logo.png" width={200} height={200} alt='logo' />
                </a>
            </div>
            <PrevPage />
            <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Партнерам</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-5 items-start">
                <div className="w-full">
                    <p>Уважаемый руководитель!<br />
                        Предлагаем Вам рассмотреть предложение о сотрудничестве с официальным таксопарком «Европа» по безналичному расчету.
                    </p>
                    <h3 className='font-semibold mt-5 mb-2 text-2xl'>Почему выбирают нас:</h3>

                    {[
                        'Прозрачные цены',
                        'Работаем без НДС',
                        'Цена маршрута формируется в момент заказа, по кратчайшему расстоянию в программе (не меняется в процессе движения автомобиля)',
                        'Время подачи автомобиля 5-15 минут',
                        'Собственный автопарк класса «комфорт», «комфорт +». Более 120 автомобилей марок: Шкода (Октавия, Рапид), Фольксваген Поло, 2020-2022 г.в., Кио Рио 2020-2022 г.в., Баик Ю5 Плюс 2023 - 2024 г.в.',
                        'Приоритет вашего номера при входящих звонках',
                        'Автомобили имеют лицензию согласно № ФЗ-580 от 29.12.2022',
                        'Собственная ремонтная база',
                        'Организация медицинских осмотров водителей',
                        'Ежедневный контроль технического состояния автомобиля',
                        'Защита от несанкционированных поездок (пароль, номер телефона)',
                        'Отчет по поездкам (стоимость, время, маршрут, километраж)',
                        'Бухгалтерская отчетность',
                        'Постоплата (за прошедший месяц)',
                        'Личный кабинет',
                        'Диспетчерская находится в Калининграде'
                    ].map((text, index) => (
                        <div key={index} className="flex m-1 items-start w-full gap-4">
                            <Image src="/check.png" width={20} height={20} className="w-5 h-5 flex-shrink-0" alt='check' />
                            <div className="flex-1">{text}</div>
                        </div>
                    ))}
                    <p className='mt-5'>Такси Европа</p>
                </div>
                <div className="w-full lg:w-auto">
                    <RightBar />
                </div>
            </div>
        </div>
    )
}