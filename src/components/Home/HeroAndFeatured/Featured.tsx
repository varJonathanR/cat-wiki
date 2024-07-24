'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedBreed from '@/components/Home/HeroAndFeatured/FeaturedBreed'
import Arrow from '@/assets/Arrow.svg'
import ContentLoaderPrev from '@/components/loaders/ContentLoaderPrev'
import { BreedPrevData } from '@/utils/breedTypes'

export default function Featured() {
    const [topBreedsPrev, setTopBreedPrev] = useState<Array<BreedPrevData>>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch('/api/topbreedsprev')
            const data = await response.json()

            setTopBreedPrev(data)
            setLoading(false)
        }

        fetchBreeds()
    }, [])

    return (
        <div className="p-4 px-6 md:px-12 md:py-10 lg:px-20 lg:py-8">
            <div className="flex items-end justify-between">
                <div className="flex-1">
                    <h3 className="text-2xs md:text-sm">
                        Most searched breeds
                    </h3>
                    <hr className="h-[3px] w-6 bg-custom-brown md:w-12" />
                    <h1 className="mt-2 w-4/6 font-bold md:mt-4 md:text-4xl">
                        66+ Breeds for you to discover
                    </h1>
                </div>
                <Link
                    href="/topbreeds"
                    className="flex items-center gap-2 text-2xs font-semibold text-gray-700 md:text-sm"
                >
                    VIEW MORE
                    <Image
                        src={Arrow}
                        alt="Arrow icon"
                        className="h-4 w-auto md:h-5"
                    />
                </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-8">
                {loading === true
                    ? Array.from({ length: 4 }).map((_, i) => (
                          <ContentLoaderPrev key={i} prev />
                      ))
                    : topBreedsPrev.map((breed, i) => (
                          <Link href={`${breed.id}`} key={i}>
                              <FeaturedBreed
                                  src={breed.imageUrl}
                                  breed={breed.name}
                              />
                          </Link>
                      ))}
            </div>
        </div>
    )
}
