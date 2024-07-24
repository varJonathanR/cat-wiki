'use client'

import Image from 'next/image'

interface Props {
    src: string
    breed: string
    description: string
}

export default function TopBreed({ src, breed, description }: Props) {
    return (
        <div className="flex flex-col gap-1 md:flex-row md:gap-4 lg:gap-8">
            <div className="relative aspect-square h-40 overflow-hidden rounded-xl bg-gray-300">
                <Image
                    src={src}
                    alt={breed}
                    fill
                    objectFit="cover"
                    loading="lazy"
                    objectPosition="top"
                />
            </div>
            <div className="flex-1">
                <h1 className="mb-2 font-bold md:text-lg lg:text-2xl">
                    {breed}
                </h1>
                <p className="hidden text-pretty text-sm md:block lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}
