import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/CatwikiLogoWhite.svg'


export default function Footer() {
    return (
        <footer className="mt-4 flex w-full flex-col items-start gap-2 rounded-t-3xl bg-black p-4 md:flex-row md:items-center md:justify-between">
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="CatWiki logo"
                    className="h-5 w-auto md:h-8"
                />
            </Link>
            <p className="text-xs text-gray-400 md:text-sm">
                © Created by{' '}
                <a
                    href="https://github.com/varJonathanR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-300"
                >
                    varJonathanR
                </a>{' '}
                -{' '}
                <a
                    href="https://devchallenges.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400"
                >
                    devChallenges.io
                </a>
            </p>
        </footer>
    )
}
