import banner from '@/assets/banner.svg'
import bannerMobile from '@/assets/banner-mobile.svg'
import Image from 'next/image'

export function Banner() {
    return (
        <>
            <div className='bg-secondary h-1 w-full' />
            <div className="lg:flex w-full bg-black hidden">
                <Image src={banner} alt="" width={0} height={0} className="flex w-full h-auto " />
            </div>
            <div className="flex relative w-full bg-black lg:hidden">
                <Image src={bannerMobile} alt="" className="w-full h-auto" />
            </div>
        </>
    )
}