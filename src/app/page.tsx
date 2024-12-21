import Link from "next/link";
export default function Home() {
  return (
    <div>
      <span className="flex justify-center text-center">
        <p className="font-bold pt-12 text-3xl w-[660px]">Explore our exquisite collection of perfumes powered by API.</p>
      </span>
      <div className="flex justify-center mt-6">
        <Link href="/perfume">
          <button className="bg-gray-800 px-5 py-3 text-white rounded">
            See Collection
          </button>
        </Link>
      </div>
    </div>
  );
}
