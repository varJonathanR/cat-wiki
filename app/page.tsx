import HeroAndFeatured from '@/components/Home/HeroAndFeatured/HeroAndFeatured'
import Nav from '@/components/Nav'
import GalleryAndQuestion from '@/components/Home/GalleryAndQuestion/GalleryAndQuestion'
import Footer from '@/components/Footer'
import RootLayout from '@/layout'

export default function Home() {
    return (
        <RootLayout>
            <Nav />
            <HeroAndFeatured />
            <GalleryAndQuestion />
            <Footer />
        </RootLayout>
    )
}
