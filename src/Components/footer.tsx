import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/kpt_logo.jpeg";
import linkedin from "@/images/LinkedIn.png";
import youtube from "@/images/youtube.png";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import twitter from "@/images/twitter.png";




const Footer = () => {
    return (
        <div className="py-24 relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-blue-100 text-sm mt-24">
            {/* top */}
            <div className="flex justify-between gap-24">
                {/* Left */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/" className="">
                        <Image src={Logo} alt="Logo" width={50} height={50} className="rounded-full ring-8" />
                    </Link>
                    <p>30 Badawa Layout, Behind Crescent International School, Kano</p>
                    <span className="font-semibold">hello@kpt-comp.com.ng</span>
                    <span className="font-semibold">+234 907 806 1022</span>
                    <div className="flex gap-6">
                        <Image src={facebook} alt="whatsapp" width={30} height={30} className="cursor-pointer" />
                        <Image src={instagram} alt="facebook" width={30} height={30} className="cursor-pointer" />
                        <Image src={youtube} alt="instagram" width={30} height={30} className="cursor-pointer" />
                        <Image src={linkedin} alt="twitter" width={30} height={30} className="cursor-pointer" />
                        <Image src={twitter} alt="linkedin" width={30} height={30} className="cursor-pointer" />
                    </div>
                </div>
                {/* Center */}
                <div className="hidden lg:flex justify-between w-1/2">

                </div>
                {/* Right */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <h1 className="text-lg font-medium">SUBSCRIBE</h1>
                <p>Be the first to get latest news about trends, promotions, and much more!</p>
                <div className="flex gap-4">
                    <input type="text" placeholder="Enter your email" className="w-3/4 h-10 px-4 rounded-md border-2 border-yellow-800 focus:outline-none focus:border-yellow-800" />
                    <button className="bg-yellow-800 text-white px-4 py-2 rounded-md">Join</button>
                </div>
                <span className="font-semibold">Secure Payments</span>
                <div className="flex gap-4 justify-between">

                </div>

                
                </div>

            </div>
            {/* bottom */}
            <div></div>
        </div>
    );
}
export default Footer;
