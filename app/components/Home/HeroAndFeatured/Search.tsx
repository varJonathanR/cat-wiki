import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import SearchIcon from '@/assets/Search.svg'
import { Breeds } from '@/utils/Breeds'
import type { Breed } from '@/utils/Breeds'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    setSearch: Dispatch<SetStateAction<boolean>>;
}

export default function Search({ setSearch }: Props) {
    const [breed, setBreed] = useState<string>('')
    const [suggestions, setSuggestions] = useState<Array<Breed>>(Breeds)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setBreed(value)

        const filteredSugegstions = Breeds.filter((breed) =>
            breed.name.toLowerCase().includes(value.toLocaleLowerCase())
        )

        setSuggestions(filteredSugegstions)
    }
    return (
        <section className="relative w-1/4">
            <label
                htmlFor="search"
                className="flex w-full cursor-pointer gap-2 rounded-3xl bg-gray-100 px-2 py-1 text-2xs md:h-9 md:px-4 md:text-base"
            >
                <input
                    type="text"
                    className="h-full w-full bg-transparent outline-none"
                    placeholder="Enter your breed"
                    onChange={handleChange}
                    onClick={() => setSearch(true)}
                />
                <Image
                    src={SearchIcon}
                    alt="Search icon"
                    className="h-auto w-2 bg-transparent md:w-4"
                    loading="lazy"
                />
            </label>
            <ul
                className={`${breed.length > 0 ? 'absolute' : 'hidden'} z-10 mt-4 h-auto max-h-44 w-full overflow-hidden overflow-y-scroll rounded-xl bg-gray-100 py-4`}
            >
                {suggestions.length > 0 ? (
                    suggestions.map((breed: Breed, i) => (
                        <li
                            className="w-full px-4 transition-all hover:bg-gray-300"
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
