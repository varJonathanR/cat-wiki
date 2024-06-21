import Image from 'next/image'

interface Props {
    images: Array<string>
}

export default function Gallery({ images }: Props) {
    return (
        <section className="mx-auto mb-14 w-11/12">
            <h1 className="text-2xl font-semibold">Other photos</h1>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
                {images.slice(1, 9).map((src, i) => (
                    <div
                        className="relative aspect-square h-auto w-full overflow-hidden rounded-xl"
                        key={i}
                    >
                        <Image
                            src={src}
                            alt="Cat image"
                            fill
                            objectFit='cover'
                            objectPosition='top'
                            loading='lazy'
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
