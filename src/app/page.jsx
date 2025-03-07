import Akcii from '@/components/akcii';
import FirstBlock from '@/components/firstBlock';
import ServicesComponent from '@/components/services';
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <FirstBlock />
      <div className="mt-10 lg:mx-30 mb-30 mx-5">
        <div className=" bg-white rounded-3xl">
          <p className='lg:px-30 px-5 py-10 lg:text-sm text-[12px] font-semibold text-center'>«Такси Европа» — динамично развивающаяся служба, придерживающаяся главной цели — облегчение
            заботы клиентов, связанные с передвижением по городу. Вот уже более 10 лет мы  оказываем
            услуги на территории Калининградской области и постоянно улучшаем сервис работы пассажирских перевозок.
            В круглосуточном режиме Мы всегда рады Вам помочь доехать до работы, отвезти ребёнка в школу, встретить
            в аэропорту с повышенным комфортом. В нашем штате работают только профессиональные водители с отличным
            знанием дорог и маршрутов движения. Все наши водители имеют лицензию на осуществление перевозок пассажиров
            и багажа на автомобилях повышенной комфортности,  проходят ежедневный врачебный осмотр. Безопасность Вашей
            поездки для нас всегда очень важна. Кроме того, у нас есть современный собственный диспетчерский центр —
            это гарантия вашего безопасного и приятного нахождения в наших такси во время поездки!  Нас выбирают и нам
            доверяют такие крупные корпоративные клиенты как ОАО "РЖД", ПАО "Сбербанк",
            банк ВТБ, Леруа  Мерлен, Фонд капитального строительства, муниципальные, казённые учреждения Калининградской
            области. Для заказа такси вы можете установить на смартфон наше приложение и отслеживать время до прибытие
            автомобиля. С нами Комфортно! Такси Европа!</p>
          <div className="flex lg:justify-between justify-center lg:items-end">
            <Image src="/1.png" alt='car' width={300} height={100} className='hidden lg:block h-60 rounded-bl-3xl rounded-tr-3xl w-80 m-1 object-cover' />
            <Image src="/2.png" alt='car' width={300} height={200} className='h-60 rounded-t-3xl rounded-b-3xl lg:rounded-b-none w-80 m-1 object-cover' />
            <Image src="/3.png" alt='car' width={300} height={200} className='hidden lg:block h-60 rounded-t-3xl w-80 m-1 object-cover' />
            <Image src="/4.png" alt='car' width={300} height={200} className='hidden lg:block h-60 rounded-br-3xl rounded-tl-3xl w-80 m-1 object-cover' />
          </div>
        </div>
        <h1 className='text-center mt-20 text-4xl font-bold'>Такси Европа <span className='text-[#FFCB00]'>автопарк</span></h1>
        <div className="grid lg:grid-cols-3 lg:gap-5 gap-2 grid-cols-2 mt-10">
          <Image src="/11.png" alt='car' width={300} height={200} className='w-full rounded-3xl' />
          <Image src="/22.png" alt='car' width={300} height={200} className='w-full rounded-3xl' />
          <Image src="/33.png" alt='car' width={300} height={200} className='w-full rounded-3xl' />
          <Image src="/44.png" alt='car' width={300} height={200} className='w-full rounded-3xl' />
          <Image src="/55.png" alt='car' width={300} height={200} className='w-full rounded-3xl' />
          <Image src="/66.png" alt='car' width={300} height={200} className='w-full rounded-3xl' />
        </div>
        <div><ServicesComponent /></div>
        <div><Akcii /></div>
      </div>
    </div>
  );
}
