import { NextResponse } from "next/server"

const Perfumes = [
    {
        id: 1,
        title: "Catch22",
        price: "from 1,629",
        Image: "/Catch22.webp",
        description: "An enigmatic blend of citrus and woody notes, Catch22 captures the essence of mystery and sophistication."
    },
    {
        id: 2,
        title: "Dauntless",
        price: "from 1,629",
        Image: "/Dauntless.webp",
        description: "Bold and confident, Dauntless combines spicy and musky notes to inspire bravery and fearlessness."
    },
    {
        id: 3,
        title: "Inferno",
        price: "from 1,629",
        Image: "/inferno.webp",
        description: "Ignite your senses with Inferno — a fiery mix of amber, cinnamon, and smoky undertones that exudes passion."
    },
    {
        id: 4,
        title: "Saifulmulook",
        price: "from 1,629",
        Image: "/saifulmulook.webp",
        description: "Inspired by the serene lake, Saifulmulook blends floral and aquatic notes for a refreshing, tranquil experience."
    },
    {
        id: 5,
        title: "SandCity",
        price: "from 1,629",
        Image: "/sandcity.webp",
        description: "Feel the warmth of sun and sand with SandCity — a rich composition of amber, vanilla, and desert spices."
    },
    {
        id: 6,
        title: "Smash My Head",
        price: "from 1,629",
        Image: "/smash_my_head.webp",
        description: "Daring and intense, Smash My Head delivers a powerful burst of sharp citrus and deep, smoky aromas."
    },
    {
        id: 7,
        title: "Stallion",
        price: "from 1,629",
        Image: "/stallion.webp",
        description: "Exude strength and vigor with Stallion — a dynamic blend of fresh herbs, leather, and a hint of spice."
    },
    {
        id: 8,
        title: "Umeed",
        price: "from 1,629",
        Image: "/umeed.webp",
        description: "A fragrance full of hope, Umeed blends soft florals and subtle musk for a gentle, uplifting aura."
    },
];


export function GET(request:Request , {params}:{params:{id:string}}){
    const perfumeId = parseInt(params.id)
    const perfume = Perfumes.find((Perfume) => Perfume.id === perfumeId)
    return NextResponse.json(perfume)
}