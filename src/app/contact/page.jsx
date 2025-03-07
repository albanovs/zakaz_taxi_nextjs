import PrevPage from '@/components/prevPage'
import RightBar from '@/components/rightBar'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <div className="lg:mx-30 mt-10 mb-30 mx-5">
            <div className="w-full flex justify-center cursor-pointer">
                <a href="/">
                    <Image src="/logo.png" width={200} height={200} alt='logo' />
                </a>
            </div>
            <PrevPage />
            <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Контакты</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-5 items-start">
                <div className="w-full">
                    <div>
                        <h4 className='font-semibold text-xl'>Жалобы на обслуживание водителей:</h4>
                        <a href="tel:89118666777">тел. 8-911-86-66-777 Владимир Олегович</a>
                        <p>Жалобы и предложения по работе диспетчерской службы:</p>
                        <a href="tel:89632935520">тел. 8-963-293-55-20  Светлана Владимировна</a>
                    </div>
                    <div className="mt-10">
                        <h4 className='font-semibold text-xl'>ТАКСИ ЕВРОПА</h4>
                        <p>
                            Одна из крупнейших в Калининградской области компаний такси приглашает Вас воспользоваться услугами современного такси мирового уровня в Калининграде, и Калининградской области.
                            Оперативность приема и выполнения заказа клиента — наша главная задача.
                        </p>
                    </div>
                    <div className="lg:mt-20 p-6 rounded-lg flex flex-col md:flex-row">
                        <div className="md:w-1/2 space-y-4 font-semibold">
                            <p>г. Калининград, ул. Орудийная 103<br />
                                ИНН 3906310335<br />
                                Регистрационный номер (ОГРН)<br /> 1133926044361</p>
                            <p>телефон: <a href="tel:84012500600">8 (40-12)-500-600</a></p>
                            <p><a href="tel:84012500700">8-(40-12)-500-700</a> для водителей</p>
                            <p><a href="tel:89632935520">8-963-293-55-20</a> для операторов</p>
                            <a href="mailto:europa500600@mail.ru">E-mail: europa500600@mail.ru</a>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <iframe
                                className='rounded-xl shadow'
                                src="https://yandex.ru/map-widget/v1/?ll=20.563461%2C54.744851&z=16&pt=20.563461,54.744851,pm2rdl"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <RightBar />
                </div>
            </div>
        </div>
    )
}