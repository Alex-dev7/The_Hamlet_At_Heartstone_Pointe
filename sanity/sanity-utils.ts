import { groq } from "next-sanity";
import { createClient } from "next-sanity";
import clientConfig  from "./config/client-config"

// export async function getRestaurantInfo(): Promise<Restaurant[]> {

//     return createClient(clientConfig).fetch(
//         groq`*[_type == "restaurant"]{
//             _id,
//             address,
//             phone,
//             email,
//             reserve,
//             facebook,
//             instagram
//         }`
//     )
// }