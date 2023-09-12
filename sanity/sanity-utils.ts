import { groq } from "next-sanity";
import { createClient } from "next-sanity";
import clientConfig  from "./config/client-config"
import { Layout } from "@/types/Layout";

export async function getInteriorInfo(): Promise<Layout[]> {

    return await createClient(clientConfig).fetch(
        groq`*[_type == "interior"]{
           
            content,
            "images":   images[].asset->url,
        }`
    )
}

export async function getExteriorInfo(): Promise<Layout[]> {

    return await createClient(clientConfig).fetch(
        groq`*[_type == "exterior"]{
           
            content,
            "images":   images[].asset->url,
        }`
    )
}