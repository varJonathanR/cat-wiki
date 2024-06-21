import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/CatwikiLogo.svg'

export default function Nav() {
    return (
        <nav className='z-50'>
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="CatWiki logo"
                    className="h-6 w-auto md:h-8"
                />
            </Link>
        </nav>
    )
}
