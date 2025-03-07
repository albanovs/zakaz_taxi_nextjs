import Akcii from '@/components/akcii'
import PrevPage from '@/components/prevPage'
import RightBar from '@/components/rightBar'
import ServicesComponent from '@/components/services'
import Image from 'next/image'
import React from 'react'

export default function Services() {

    return (
        <div className="lg:mx-30 mt-10 mb-30 mx-5">
            <div className="w-full flex justify-center cursor-pointer">
                <a href="/">
                    <Image src="/logo.png" width={200} height={200} alt='logo' />
                </a>
            </div>
            <PrevPage />
            <h1 className='text-4xl font-bold text-center mt-10 mb-10'>Такси по городу</h1>

            <div className="flex flex-col lg:flex-row justify-between gap-5 items-start">
                <div className="w-full">
                    <Image src="/fulltaxi.png" width={1000} height={1000} alt='taxi' />
                    <p className='mt-10'>Мы предоставляем разного рода транспортные услуги, в числе которых аренда автомобилей с водителем,
                        vip-такси, комплексное транспортное обслуживание частных лиц и организаций на договорных условиях.
                        Мы готовы решить за вас «транспортную» проблему, предлагая как краткосрочную (почасовую)
                        аренду автомобилей, включая трансферы на железнодорожные вокзалы и в аэропорты, так и долгосрочную аренду авто с водителем для частных лиц и организаций. Мы дорожим своими клиентами и стараемся предоставлять транспортные услуги исключительно высокого качества.</p>
                    <div className="mt-5">
                        <a href="tel:84012500600" className='font-bold text-2xl'>Заказать такси: тел. 8 (4012) 500-600</a>
                    </div>
                    <div>
                        <ServicesComponent count={true} />
                    </div>
                    <div>
                        <Akcii />
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <RightBar />
                </div>
            </div>
        </div>
    )
}