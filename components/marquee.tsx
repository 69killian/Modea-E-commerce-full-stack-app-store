import React from 'react'
import Image from 'next/image'
import nike from '@/components/ui/images/nike-11.svg'
import adidas from '@/components/ui/images/adidas-2.svg'
import lacoste from '@/components/ui/images/lacoste-logo.svg'
import asos from '@/components/ui/images/asos-1.svg'

const Marquee = () => {
  return (
    <>
    <div className="overflow-hidden">
    <p className="font-bold text-[35px] sm:text-[55px] md:text-[75px] lg:text-[95px] xl:text-[105px]">ILS NOUS FONT CONFIANCE<span className='text-blue-600'>*</span></p>
  <div className="flex w-full gap-[500px] animate-marquee whitespace-nowrap">
    <Image src={nike} height={100} width={100} alt="icon" />
    <Image src={adidas} height={200} width={150} alt="icon" />
    <Image src={lacoste} height={100} width={100} alt="icon" />
    <Image src={asos} height={200} width={100} alt="icon"  />
    {/* Duplicate logos for smooth infinite scroll */}
    <Image src={nike} height={100} width={100} alt="icon"/>
    <Image src={adidas} height={200} width={150} alt="icon"  />
    <Image src={lacoste} height={100} width={100} alt="icon"  />
    <Image src={asos} height={200} width={100} alt="icon" />
  </div>
</div>

    </>
  )
}

export default Marquee