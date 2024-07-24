import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RootLayout from '@/app/layout'
import OwningACat from '@/app/why-have-a-cat/OwningACat'
import Arrow from '@/assets/Arrow.svg'

export default function Breed() {
    return (
        <RootLayout>
            <Nav />
            <Link
                href="/"
                className="mt-4 flex items-center gap-2 text-2xs font-semibold text-gray-700 md:text-sm"
            >
                <Image
                    src={Arrow}
                    alt="Arrow icon"
                    className="h-4 w-auto rotate-180 md:h-5"
                />
                HOME
            </Link>
            <OwningACat />
            <Footer />
        </RootLayout>
    )
}
