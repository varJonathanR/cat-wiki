import Image from 'next/image'
import Stats from '@/app/[breed]/Stats'
import { BreedData } from '@/utils/breedTypes'

interface Props {
    breedData: BreedData | null;
    imageUrl: string;
}

export default function BreedInfo({ breedData, imageUrl }: Props) {
    return (
        breedData && (
            <div className="mx-auto my-8 flex w-[90%] flex-col gap-1 md:flex-row md:gap-8 lg:gap-14">
            <div className="relative aspect-square w-72 md:w-44 md:h-44 lg:w-80 lg:h-80 mx-auto overflow-hidden rounded-xl">
                <Image
                    src={imageUrl}
                    alt={breedData.name}
                    fill
                    objectFit='cover'
                    objectPosition='top'
                />
            </div>
            <div className="flex-1">
                <h1 className="mb-2 font-bold text-center md:text-left md:text-lg lg:text-2xl">
                    {breedData.name}
                </h1>
                <p className="text-pretty text-sm lg:text-base">
                    {breedData.description}
                </p>
                <Stats
                    temperament={breedData.temperament}
                    origin={breedData.origin}
                    life={breedData.life_span}
                    adaptability={breedData.adaptability}
                    affection={breedData.affection_level}
                    child={breedData.child_friendly}
                    grooming={breedData.grooming}
                    inteligence={breedData.intelligence}
                    healt={breedData.health_issues}
                    social={breedData.social_needs}
                    stranges={breedData.stranger_friendly}
                />
            </div>
        </div>
        )
    )
}
