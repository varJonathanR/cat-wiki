import { NextResponse } from "next/server";
import { getBreedById, getBreedImgs } from "../CatAPI";

export async function GET(req: Request, { params }: { params: { breed: string } }) {
    try {
        const breedId = params.breed;
        const breed = await getBreedById(breedId);
        const breedImages = await getBreedImgs(breedId);

        const reqData = {
            name: breed.data.name,
            description: breed.data.description,
            temperament: breed.data.temperament,
            origin: breed.data.origin,
            life_span: breed.data.life_span,
            adaptability: breed.data.adaptability,
            affection_level: breed.data.affection_level,
            child_friendly: breed.data.child_friendly,
            grooming: breed.data.grooming,
            intelligence: breed.data.intelligence,
            health_issues: breed.data.health_issues,
            social_needs: breed.data.social_needs,
            stranger_friendly: breed.data.stranger_friendly
        };

        const filteredImages = breedImages.data.map((img: any) => img.url);

        const breedData = {
            data: reqData,
            images: filteredImages
        }

        return NextResponse.json(breedData);
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch breed data" })
    }
}