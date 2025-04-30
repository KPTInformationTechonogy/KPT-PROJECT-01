import Link from "next/link";

const ProductList = () => {
    return (
        <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        <span className="text-blue-600">Kano Process Trading Company</span> - Your Trusted Partner
                    </h2>
                    
                    <div className="space-y-4 text-lg text-gray-700">
                        <p>
                            We provide high-quality <strong>furniture materials</strong>, <strong>plumbing supplies</strong>, 
                            and <strong>building materials</strong> along with professional <strong>home decoration services</strong>.
                        </p>
                        <p>
                            Our <strong>precision cutting and edging services</strong> ensure a seamless experience from order 
                            to delivery, backed by secure payment options and our commitment to excellence.
                        </p>
                        <p className="font-semibold">
                            We guarantee exceptional satisfaction for all your construction and interior needs.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link 
                            href="/products" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
                        >
                            Read More
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    width="700"
                    height="450"
                    src="https://www.youtube.com/embed/xwRq109IO6Y?si=aJ6RvtVLLm0_lhUi"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ProductList;