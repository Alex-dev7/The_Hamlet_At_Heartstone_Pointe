import { PortableTextBlock } from "sanity";

export type Interior  = {
    content: PortableTextBlock[];
    images: [
        {image: string;}
    ];
    
}


// const interior = {
//     name: 'interiror',
//     title: 'Interior',
//     type: 'document',
//     fields: [
//         {
//             name: 'content',
//             title: 'Content',
//             type: 'array',
//             of: [{type: 'block'}],
            
//         },
//         {
//             name: 'images',
//             type: 'array',
//             title: 'Images',
//             of: [
//               {
//                 name: 'image',
//                 type: 'image',
//                 title: 'Image',
//                 options: {
//                   hotspot: true,
//                 },
//                 fields: [
//                   {
//                     name: 'alt',
//                     type: 'string',
//                     title: 'Alternative text',
//                   },
//                 ],
//               },
//             ],
//         }
//     ]

// }