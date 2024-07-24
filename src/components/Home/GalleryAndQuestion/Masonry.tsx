import Image from 'next/image'
import Cat1 from '@/assets/image1.webp'
import Cat2 from '@/assets/image2.webp'
import Cat3 from '@/assets/image3.webp'

export default function Masonry() {
    return (
        <div className="columns-2">
            <Image src={Cat2} alt="Cat 2" className="h-auto w-full" loading='lazy' />
            <Image
                src={Cat1}
                alt="Cat 1"
                className="ml-auto mt-3 h-auto w-9/12"
                loading='lazy'
            />
            <Image src={Cat3} alt="Cat 3" className="h-auto w-full" loading='lazy' />
        </div>
    )
}
