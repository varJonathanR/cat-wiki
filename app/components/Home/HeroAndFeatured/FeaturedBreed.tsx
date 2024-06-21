import Image, { StaticImageData } from 'next/image'

interface Props {
    src: string | StaticImageData
    breed: string
}

export default function FeaturedBreed({ src, breed }: Props) {
    return (
        <div className="w-full cursor-pointer pb-1 hover:text-gray-100">
            <div className="relative aspect-square h-auto w-full overflow-hidden rounded-xl">
                <Image src={src} alt={breed} fill objectFit="cover" objectPosition='top' loading='lazy' />
            </div>
            <h1 className="mt-1 text-xs font-semibold md:text-sm">{breed}</h1>
        </div>
    )
}
