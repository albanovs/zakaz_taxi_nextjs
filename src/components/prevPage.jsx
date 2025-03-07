'use client'

import Image from 'next/image'
import React from 'react'

export default function PrevPage() {

    return (
        <div>
            <a href='/' className='text-[#8C8C8C] flex items-center gap-2 cursor-pointer hover:text-[#323f6d] my-10'>
                <Image src={'/prevPage.png'} width={20} height={20} alt='prev' />
                Назад
            </a>
        </div>
    )
}
