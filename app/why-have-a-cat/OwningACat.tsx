import Masonry from '@/components/Home/GalleryAndQuestion/Masonry'

export default function OwningACat() {
    return (
        <section className="my-4">
            <div className="flex w-full flex-col items-center gap-8 md:flex-row">
                <Masonry />
                <div className="md:w-4/5">
                    <h1 className="text-3xl font-semibold md:text-5xl">
                        10 reasons why you should have a cat
                    </h1>
                    <a
                        href="https://www.freshpet.com/blog/10-reasons-why-cats-make-great-pets"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-700"
                    >
                        Based on freshpet.com
                    </a>
                </div>
            </div>
            <ol className="mx-auto mt-8 w-4/5 list-decimal">
                <li>
                    <h3>Cats are quiet</h3>
                    <p>
                        If noise levels are a concern in your living situation,
                        cats are a great choice of pet. Even the quietest bark
                        will likely be much louder than the most insistent
                        meowing. Depending on the cat, you may need to worry
                        about other sounds such as them knocking things off of
                        surfaces or running around at top speed, but they are
                        still likely to be more quiet overall.
                    </p>
                </li>
                <li>
                    <h3>Cats are low maintenance</h3>
                    <p>
                        Compared to dogs, cats are a low maintenance pet. They
                        don’t require formal training, they don’t need to be
                        taken out multiple times a day, and they’re even able to
                        take care of basic self-cleaning. Of course, long-haired
                        cats will still require regular grooming, but it will
                        likely involve less regular grooming than long-haired
                        dogs.
                    </p>
                </li>
                <li>
                    <h3>Cats are easy to house-train</h3>
                    <p>
                        One of the biggest challenges dog owners need to
                        overcome is the process of house-training a new puppy.
                        Kittens, on the other hand, usually know how to use the
                        litter box as soon as you bring them home. All you need
                        to do is show them where it is, and they’ll
                        instinctively use it.
                    </p>
                </li>
                <li>
                    <h3>Cats make great apartment pets</h3>
                    <p>
                        When it comes to pets in apartments, cats are often
                        better suited than dogs. Compared to dogs, cats require
                        less space and can take better advantage of vertical
                        space. Even in apartments with small square footage, you
                        can make the space comfortable for cats by adding
                        different vertical levels. Plus, since they use litter
                        boxes, they don’t need to be taken outside multiple
                        times a day – something that can be time-consuming if
                        you live in a large apartment building.
                    </p>
                </li>
                <li>
                    <h3>Cats cost less to care for</h3>
                    <p>
                        According to the ASPCA, the overall cost of caring for
                        cats is lower than medium or large dogs. This is because
                        they require less food, fewer toys, and have lower
                        overall grooming costs.
                    </p>
                </li>
                <li>
                    <h3>Cats are independent</h3>
                    <p>
                        One of the best things about cats is that they are very
                        independent creatures. Unlike dogs, who require quite a
                        high level of attention each day, cats are quite happy
                        to have time to themselves. In fact, cats will sleep for
                        about 15 hours a day so you don’t have to worry about
                        them being too bored when you’re at work. When you are
                        home, cats are also more likely to be content with just
                        being in your company, whereas dogs may demand your
                        undivided attention.
                    </p>
                </li>
                <li>
                    <h3>Cats have a long lifespan</h3>
                    <p>
                        Any pet owner knows that losing a pet is a truly
                        heartbreaking experience. Fortunately, when it comes to
                        house pets, cats have quite a long life expectancy. The
                        average life span of a cat is 12 years, but it’s not
                        uncommon for them to live into their high teens or even
                        early twenties.
                    </p>
                </li>
                <li>
                    <h3>Cats are good for your health</h3>
                    <p>
                        Studies have shown that cats have a calming effect on
                        their owners, from the soothing action of petting to
                        purring being an aid in falling asleep. Cats can even
                        play a part in lowering your blood pressure and risk of
                        a heart attack. One 10-year study has even shown that
                        cat owners were 30% less likely to die of a heart attack
                        or stroke than non-cat owners.
                    </p>
                </li>
                <li>
                    <h3>Cats can lead to fewer allergies</h3>
                    <p>
                        In a study by the National Institutes of Health, it was
                        found that children under the age of one who were
                        exposed to a cat were less likely to develop allergies.
                        The interesting part was that this wasn’t just limited
                        to pet allergies, but all types of allergies. It appears
                        that exposure to pets as a young child will protect you
                        against not only pet allergies, but other common
                        allergies such as dust mites, ragweed, and grass.
                    </p>
                </li>
                <li>
                    <h3>Cats keep unwanted pests out of your house</h3>
                    <p>
                        Cats are hardwired to stalk, hunt, and pounce on their
                        prey, which makes them perfect for keeping your home
                        free of unwanted pests – be it mice, bugs, or something
                        else. Even their presence can be enough of a deterrent
                        for rodents as their scent can act as a repellent.
                    </p>
                </li>
            </ol>
        </section>
    )
}
