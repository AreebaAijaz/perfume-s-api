interface IPerfume{
    id: number,
    title: string,
    Image: string,
    price: string
}
"use client"
import { useState , useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function PerfumesHome(){
    const [perfumes , setPerfumes] = useState<IPerfume[]>([])
    useEffect(() => {
        const fetchPerfume = async() =>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/perfume`)
            const data:IPerfume[] = await res.json()
            setPerfumes(data)
        }
        fetchPerfume()
    }, [])
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-10">Our Perfume Collection</h1>
          {perfumes.length === 0 ? (
            <p className="text-center text-gray-500">Loading perfumes...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {perfumes.map((perfume) => (
                <Link key={perfume.id} href={`/perfume/${perfume.id}`}>
                  <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <Image
                      src={perfume.Image}
                      alt={perfume.title}
                      height={200}
                      width={200}
                      className=" h-52 w-52 object-fit rounded-md mb-4 mx-auto"
                    />
                    <p className="text-xl font-bold mb-2 text-center">{perfume.title}</p>
                    <p className="text-red-500 font-semibold text-center">{perfume.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    
















