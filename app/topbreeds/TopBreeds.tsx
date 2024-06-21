'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import TopBreed from '@/topbreeds/TopBreed'
import { BreedPrevData } from '@/utils/breedTypes'
import ContentLoaderPrev from '@/components/loaders/ContentLoaderPrev'

export default function TopBreeds() {
    const [loading, setLoading] = useState<boolean>(true)
    const [topBreeds, setTopBreeds] = useState<Array<BreedPrevData>>([])

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch('/api/topbreeds')
            const data = await response.json()

            setTopBreeds(data)
            setLoading(false)
        }

        fetchBreeds()
    }, [])

    return (
        <section>
            <h1 className="my-4 text-lg font-bold md:my-8 md:text-3xl">
                Top 10 most searched breeds
            </h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:gap-8">
                {loading === true
                    ? Array.from({ length: 10 }).map((_, i) => (
                          <ContentLoaderPrev key={i} />
                      ))
                    : topBreeds.map((breed, i) => (
                          <Link href={`${breed.id}`} key={i}>
                              <TopBreed
                                  src={breed.imageUrl}
                                  breed={`${i + 1}. ${breed.name}`}
                                  description={breed.description}
                              />
                          </Link>
                      ))}
            </div>
        </section>
    )
}
