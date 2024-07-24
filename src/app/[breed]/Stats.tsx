import StatBar from '@/app/[breed]/StatBar'

interface Props {
    temperament: string
    origin: string
    life: string
    adaptability: number
    affection: number
    child: number
    grooming: number
    inteligence: number
    healt: number
    social: number
    stranges: number
}

export default function Stats({
    temperament,
    origin,
    life,
    adaptability,
    affection,
    child,
    grooming,
    inteligence,
    healt,
    social,
    stranges,
}: Props) {
    return (
        <div className='stats'>
            <p className="mt-4">
                <span className="font-bold">Temperament:</span> {temperament}
            </p>
            <p className="mt-4">
                <span className="font-bold">Origin:</span> {origin}
            </p>
            <p className="mt-4">
                <span className="font-bold">Life Span:</span> {life}
            </p>
            <div className="my-4 flex gap-4">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Adaptability:</p>
                    <p className="font-bold">Afection Level:</p>
                    <p className="font-bold">Child Friendly:</p>
                    <p className="font-bold">Grooming:</p>
                    <p className="font-bold">Inteligence:</p>
                    <p className="font-bold">Healt Issues:</p>
                    <p className="font-bold">Social Needs:</p>
                    <p className="font-bold">Stranger Friendly:</p>
                </div>
                <div className="mt-2 flex flex-col gap-[25px] lg:gap-[28px]">
                    <StatBar value={adaptability} />
                    <StatBar value={affection} />
                    <StatBar value={child} />
                    <StatBar value={grooming} />
                    <StatBar value={inteligence} />
                    <StatBar value={healt} />
                    <StatBar value={social} />
                    <StatBar value={stranges} />
                </div>
            </div>
        </div>
    )
}
