import type { AxiosResponse } from "axios";
import axios from "@/api/axios"

export const getTopBreeds = async (): Promise<AxiosResponse> => axios.get("/breeds?limit=10&order=desc");
export const all = async (): Promise<AxiosResponse> => axios.get("/breeds");

export const getTopBreedsPrev = async (): Promise<AxiosResponse> => axios.get("/breeds?limit=4&order=desc");

export const getBreedById = async (breedId: string) => axios.get(`/breeds/${breedId}`);

export const getBreedImgs = async (breedId: string) => axios.get(`/images/search?breed_ids=${breedId}&limit=9`);