'use client'

import LogoWhite from '@/assets/CatwikiLogoWhite.svg'
import Search from '@/components/Home/HeroAndFeatured/Search'
import SearchToggle from '@/components/Home/HeroAndFeatured/SearchToggle'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
    const [search, setSearch] = useState<boolean>(false)

    return (
        <div
            id="HeroImage"
            className="h-[125px] w-full p-4 px-6 transition-all duration-300 ease-in-out md:h-[280px] md:px-12 md:py-10 lg:h-[350px] lg:px-20 lg:py-8"
        >
            <Image
                src={LogoWhite}
                alt="CatWiki logo"
                className="h-6 w-auto md:h-12 lg:h-20"
                loading="lazy"
            />
            <h1 className="my-2 text-xs text-white md:my-4 md:text-lg lg:my-6 lg:text-2xl">
                Get to know more about <br /> your cat breed
            </h1>
            <Search setSearch={setSearch} />
            <SearchToggle search={search} setSearch={setSearch} />
        </div>
    )
}
