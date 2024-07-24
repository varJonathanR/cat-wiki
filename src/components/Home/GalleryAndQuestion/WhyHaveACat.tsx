import Image from 'next/image'
import Link from 'next/link'
import Arrow from '@/assets/Arrow.svg'

export default function WhyHaveACat() {
    return (
        <div className="w-full md:w-3/5">
            <hr className="h-[3px] w-10 bg-custom-brown lg:w-20" />
            <h1 className="mt-1 text-4xl font-bold lg:text-6xl">
                Why should <br /> you have a cat?
            </h1>
            <p className="my-4 text-balance font-medium lg:my-8 lg:text-xl">
                Having a cat arround you can actually trigger the release of
                calming chemicals in your body which lower your stress and
                anxiety levels
            </p>
            <Link
                href="/why-have-a-cat"
                className="flex items-center gap-2 text-xs font-semibold text-gray-700 md:text-sm"
            >
                READ MORE
                <Image
                    src={Arrow}
                    alt="Arrow icon"
                    className="h-4 w-auto md:h-5"
                />
            </Link>
        </div>
    )
}
