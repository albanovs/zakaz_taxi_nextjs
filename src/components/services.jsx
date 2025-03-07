import Image from 'next/image'
import React from 'react'

export default function ServicesComponent({ count }) {
    return (
        <div>
            <div className={`grid lg:grid-cols-${count ? "2" : "3"} gap-5 mt-20`}>
                <div className="bg-white shadow rounded-3xl w-full py-10 px-5">
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси по городу</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси в аэропорт</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Трезвый водитель</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Служебный водитель</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Курьер доставка</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Доставка персонала</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси Светлогорск</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси Зеленоградск</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded-3xl w-full py-10 px-5">
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Встреча ВИП-клиента</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси в Европу</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Перевозка домашних животных</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Авто няня</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси с детским креслом</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Тарифы такси</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси Янтарный</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Автосервис Европа</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded-3xl w-full py-10 px-5">
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси Европа</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Новости и акции</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Вакансии такси</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Скидки клиентам</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Корпоративным клиентам</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Отзывы, вопрос-ответ</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Наши клиенты</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image src="/check.png" width={20} height={20} alt='check' />
                        <p>Такси на море</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
