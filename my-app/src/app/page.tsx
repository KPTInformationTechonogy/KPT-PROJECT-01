import CategoryList from "@/Components/CategoryList";
import ProductList from "@/Components/ProductList";
import About from "@/Components/about";
import Slider from "@/Components/Slider";
import Location from "@/Components/Location";
const Homepage = () => {
  
  return (
    <div className="">
      <Slider/>
      <div>
        <About/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-4xl font-semibold text-yellow-600">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-4xl font-semibold text-yellow-600">Futured Products</h1>
        <ProductList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-4xl font-semibold text-yellow-600">Location</h1>
        <Location/>
      </div>
      
    </div>
  )
}
export default Homepage