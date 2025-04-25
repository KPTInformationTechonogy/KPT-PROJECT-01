import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/kpt_logo.jpeg";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
        <div className="relative h-20 bg-yellow-700 px-4 md:px-8 lg:px-16 xl:px-32 shadow-md flex items-center justify-between">
            {/* Mobile Screen */}
            <div className="flex items-center justify-between h-full gap-8">
                <Link href={"/"}>
                    <Image src={Logo} alt="Logo" width={50} height={50} className="rounded-full ring-8" />
                </Link>
                <div className="hidden xl:flex items-center justify-between h-full gap-8 m-auto">
                    <h1 className="hidden 2xl:flex text-xl font-bold text-white font-sans ml-4 tracking-wide">
                        Kano Process Trading Company
                    </h1>
                    <div className="items-center justify-between gap-8 ml-4  text-white font-sans font-semibold text-sm">
                        <Link href="" className="mx-4 font-semibold ">Home</Link>
                        <Link href="" className="mx-4 font-semibold">Services</Link>
                        <Link href="" className="mx-4 font-semibold">Products</Link>
                        <Link href="" className="mx-4 font-semibold">Deals</Link>
                        <Link href="" className="mx-4 font-semibold">Contact</Link>
                        <Link href="" className="mx-4 font-semibold">About</Link>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
                <Menu />
            </div>

            {/* Desktop Screen */}
            <div className="hidden md:flex items-center gap-8">
                <SearchBar />
                <NavIcons />
            </div>
        </div>
    );
};

export default NavBar;