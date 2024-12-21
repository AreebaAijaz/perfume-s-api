import { NextResponse } from "next/server";

const Perfumes = [
    {
        id: 1,
        title: "Catch22",
        price: "from 1,629",
        Image: "/Catch22.webp",
    },

    {
        id: 2,
        title: "Dauntless",
        price: "from 1,629",
        Image: "/Dauntless.webp",
    },
    
    {
        id: 3,
        title: "Inferno",
        price: "from 1,629",
        Image: "/inferno.webp",
    },
    {
        id: 4,
        title: "Saifulmulook",
        price: "from 1,629",
        Image: "/saifulmulook.webp",
    },
    {
        id: 5,
        title: "SandCity",
        price: "from 1,629",
        Image: "/sandcity.webp",
    },
    {
        id: 6,
        title: "Smash My Head",
        price: "from 1,629",
        Image: "/smash_my_head.webp",
    },
    {
        id: 7,
        title: "Stallion",
        price: "from 1,629",
        Image: "/stallion.webp",
    },
    {
        id: 8,
        title: "Umeed",
        price: "from 1,629",
        Image: "/umeed.webp",
    },
];


export function GET(){
    return NextResponse.json(Perfumes)
}