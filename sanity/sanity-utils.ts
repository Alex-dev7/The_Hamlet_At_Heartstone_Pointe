import { groq } from "next-sanity";
import { createClient } from "next-sanity";
import clientConfig  from "./config/client-config"
import { Interior } from "@/types/Interior";

export async function getInteriorInfo(): Promise<Interior[]> {

    return await createClient(clientConfig).fetch(
        groq`*[_type == "interior"]{
           
            content,
            "images":   images[].asset->url ,
        }`
    )
}