import Link from "next/link";
import Image from "next/image";
import Hinges from "@/images/Hinges - Copy.png";
import Drywall from "@/images/Drywall.png";

const CategoryList = () => {
return (
<div className="bg-white w-full items-center justify-center mt-12 flex gap-x-8 gap-y-16 py-8 flex-col shadow-md rounded-md">
    <div className="flex flex-wrap justify-between gap-4 p-4">
    <div className="flex gap-4 md:gap-6 px-2 snap-x snap-mandatory flex-wrap items-center">
        {/* Product Card 1 */}
        <Link
        href="/list?cat=test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md p-4 hover:translate-y-[-4px] transition-transform"
        >
        <div className="bg-slate-100 w-full h-60">
            <Image
            src={Hinges}
            alt="Hinges"
            className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw h-60"
            />
        </div>
        <h1 className="mt-4 font-light tracking-wide">Plumbing Materials</h1>
        </Link>

        {/* Product Card 2 */}
        <Link
        href="/list?cat=test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md p-4 hover:translate-y-[-4px] transition-transform"
        >
        <div className="bg-slate-100 w-full h-60">
            <Image
            src={Drywall}
            alt="Drywall"
            className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw h-60"
            />
        </div>
        <h1 className="mt-4 font-light tracking-wide">Furniture Materials</h1>
        </Link>

        {/* Product Card 3 */}
        <Link
        href="/list?cat=test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md p-4 hover:translate-y-[-4px] transition-transform"
        >
        <div className="bg-slate-100 w-full h-60">
            <Image
            src={Hinges}
            alt="Hinges"
            className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw h-60"
            />
        </div>
        <h1 className="mt-4 font-light tracking-wide">Building Materials</h1>
        </Link>

        {/* Product Card 4 */}
        <Link
        href="/list?cat=test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md p-4 hover:translate-y-[-4px] transition-transform"
        >
        <div className="bg-slate-100 w-full h-60">
            <Image
            src={Hinges}
            alt="Hinges"
            className="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw h-60"
            />
        </div>
        <h1 className="mt-4 font-light tracking-wide">Services</h1>
        </Link>
    </div>
    </div>

    <div className="text-center mt-8">
    <button className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300">
        View More
    </button>
    </div>
</div>
);
};

export default CategoryList;
