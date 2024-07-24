'use client'

import { useEffect, useState } from 'react'
import BreedInfo from '@/app/[breed]/BreedInfo'
import Gallery from '@/app/[breed]/Gallery'
import { BreedData } from '@/utils/breedTypes'
import ContentLoader from '@/components/loaders/ContentLoader'

interface Props {
    breed: string
}

export default function FetchData({ breed }: Props) {
    const [breedData, setBreedData] = useState<BreedData | null>(null)
    const [breedImages, setBreedImages] = useState<Array<string>>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/${breed}`)
            const data = await response.json()

            setBreedData(data.data)
            setBreedImages(data.images)
            setLoading(false)
        }

        fetchData()
    }, [breed])

    return (
        <div className='w-full h-full'>
            {loading ? (
                <ContentLoader />
            ) : (
                <>
                    <BreedInfo breedData={breedData} imageUrl={breedImages[0]} />
                    <Gallery images={breedImages} />
                </>
            )}
        </div>
    )
}
