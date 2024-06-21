import Featured from '@/components/Home/HeroAndFeatured/Featured'
import Hero from '@/components/Home/HeroAndFeatured/Hero'

export default function HeroAndFeatured() {
    return (
        <section className="w-ful mt-4 h-auto overflow-hidden rounded-3xl bg-gray-200 pb-4">
            <Hero />
            <Featured />
        </section>
    )
}
