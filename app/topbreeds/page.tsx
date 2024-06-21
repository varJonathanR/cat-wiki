import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RootLayout from '@/layout'
import TopBreeds from '@/topbreeds/TopBreeds'
import Arrow from '@/assets/Arrow.svg'


export default function Top() {
    return (
        <RootLayout>
            <Nav />
            <Link
                href="/"
                className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-700 md:text-sm"
            >
                <Image
                    src={Arrow}
                    alt="Arrow icon"
                    className="h-4 w-auto rotate-180 md:h-5"
                    loading='lazy'
                />
                HOME
            </Link>
            <TopBreeds />
            <Footer />
        </RootLayout>
    )
}
