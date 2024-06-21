import { NextResponse } from "next/server";
import { getTopBreeds } from "@/api/CatAPI";
import { FullBreedData } from "@/utils/breedTypes";

export async function GET() {
    try {
        const breeds = await getTopBreeds();
        const reqData = breeds.data.map((breed: FullBreedData) => ({
            id: breed.id,
            name: breed.name,
            description: breed.description,
            imageUrl: breed.image ? breed.image.url : null
        }))

        return NextResponse.json(reqData);
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch breed data" })
    }
};