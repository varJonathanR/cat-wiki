interface Props {
    value: number
}

export default function StatBar({ value }: Props) {
    const filledBars = Math.min(Math.max(value, 0), 5)
    const totalBars = 5
    return (
        <div className="flex gap-1 lg:gap-2">
            {[...Array(totalBars)].map((_, i) => (
                <div
                    className={`h-2.5 lg:h-3 w-8 lg:w-14 rounded-full ${i < filledBars ? 'bg-[#291507]' : 'bg-gray-300'}`}
                    key={i}
                ></div>
            ))}
        </div>
    )
}
