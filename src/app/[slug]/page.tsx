import ProductImages from "@/Components/ProductImages";
import CustomizeProduct from "@/Components/CustomizeProducts";
import Add from "@/Components/Add";

const SinglePage = () => {
    return (
        <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 flex flex-col lg:flex-row gap-16 mt-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 lg:w-sticky top-20 h-max ">
                <ProductImages/>
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-semibold">Drywall Screws</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate dolores deserunt voluptatum placeat nisi optio alias culpa eos? Magnam numquam enim cum magni ducimus quae, tempora possimus porro aperiam.</p>
                <div className="h-[2px] bg-gray-700" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-yellow-700 line-through">₦450</h3>
                    <h2 className="font-medium text-2xl">₦500</h2>
                </div>
                <div className="h-[2px] bg-gray-700" />
                <CustomizeProduct />
                <Add />
                <div className="h-[2px] bg-gray-700" />
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Magni explicabo at minus! Enim, suscipit velit? 
                        Nihil adipisci, hic, quia corrupti unde veritatis amet 
                        earum dolorum quam provident ratione quaerat asperiores.
                    </p>
                </div>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Magni explicabo at minus! Enim, suscipit velit? 
                        Nihil adipisci, hic, quia corrupti unde veritatis amet 
                        earum dolorum quam provident ratione quaerat asperiores.
                    </p>
                </div>
                <div className="text-sm ">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Magni explicabo at minus! Enim, suscipit velit? 
                        Nihil adipisci, hic, quia corrupti unde veritatis amet 
                        earum dolorum quam provident ratione quaerat asperiores.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default SinglePage;