import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import SearchIcon from '@/assets/Search.svg'
import { Breeds } from '@/utils/Breeds'
import type { Breed } from '@/utils/Breeds'
import X from "@/assets/X.svg"
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    search: boolean;
    setSearch: Dispatch<SetStateAction<boolean>>
}

export default function SearchToggle({ search, setSearch }: Props) {
    const [suggestions, setSuggestions] = useState<Array<Breed>>(Breeds)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        const filteredSugegstions = Breeds.filter((breed) =>
            breed.name.toLowerCase().includes(value.toLocaleLowerCase())
        )

        setSuggestions(filteredSugegstions)
    }
    return (
        <section className={`z-10 fixed md:hidden w-full h-full top-0 ${search ? "left-0" : "right-[-100%]"}  p-8 bg-gray-100`}>
            <button className='aspect-square h-8 w-auto float-right mb-4' onClick={() => setSearch(false)}>
                <Image src={X} alt='Close icon' className='w-full h-full' />
            </button>
            <label
                htmlFor="search"
                className="flex w-full cursor-pointer gap-2 rounded-3xl border border-black px-4 py-1 h-9 text-base"
            >
                <input
                    type="text"
                    className="h-full w-full bg-transparent outline-none"
                    placeholder="Enter your breed"
                    onChange={handleChange}
                />
                <Image
                    src={SearchIcon}
                    alt="Search icon"
                    className="h-auto w-4 bg-transparent"
                    loading="lazy"
                />
            </label>
            <ul
                className=" z-10 mt-4 h-auto max-h-[420px] w-full overflow-hidden overflow-y-scroll rounded-xl py-4"
            >
                {suggestions.length > 0 ? (
                    suggestions.map((breed: Breed, i) => (
                        <li
                            className="w-full p-4 rounded-xl transition-all hover:bg-gray-300"
                            key={i}
                        >
                            <Link
                                className="w-full"
                                href={`${breed.id}`}
                                key={i}
                            >
                                {breed.name}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="w-full px-4">Breed not found</li>
                )}
            </ul>
        </section>
    )
}
