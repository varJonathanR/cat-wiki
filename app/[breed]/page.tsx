import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RootLayout from '@/layout'
import Arrow from '@/assets/Arrow.svg'
import FetchData from './FetchData'

export default function Breed({ params }: { params: { breed: string } }) {
    const breed = params.breed

    return (
        <RootLayout>
            <Nav />
            <Link
                href="/topbreeds"
                className="mt-4 flex items-center gap-2 text-2xs font-semibold text-gray-700 md:text-sm"
            >
                <Image
                    src={Arrow}
                    alt="Arrow icon"
                    className="h-4 w-auto rotate-180 md:h-5"
                />
                MOST SEARCHED BREEDS
            </Link>
            <FetchData breed={breed} />
            <Footer />
        </RootLayout>
    )
}
