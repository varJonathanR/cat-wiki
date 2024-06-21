import WhyHaveACat from '@/components/Home/GalleryAndQuestion/WhyHaveACat'
import Masonry from '@/components/Home/GalleryAndQuestion/Masonry'

export default function GalleryAndQuestion() {
    return (
        <section className="my-8 flex flex-col items-center gap-4 md:my-14 md:flex-row">
            <WhyHaveACat />
            <Masonry />
        </section>
    )
}
