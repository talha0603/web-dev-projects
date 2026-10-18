import HomeSlider from "../components/HomeSlider"
import CatSlider from '../components/CatSlider'
import { FaShippingFast } from "react-icons/fa";
import AdsBanner from "../components/AdsBanner";
import HomeProducts from "../components/HomeProducts";


const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <HomeProducts />
      <section className="py-16 bg-white mt-5">
        <div className="container">
            <div className="freeShipping w-full py-4 p-4 border-2 border-[#6366f1] flex items-center justify-between rounded-md mb-7">
                <div className="col1 flex items-center gap-4">
                    <FaShippingFast className="text-[50px]" />
                    <span className="text-[20px] font-semibold uppercase">Free Shipping</span>
                </div>
                <div className="col2">
                    <p className="mb-0 font-bold">Kudos! Free Delivery On Your First Order Over $200</p>
                </div>
                <div className="col3 font-bold text-[40px]">
                    - Only $200*
                </div>
            </div>

            <AdsBanner items={4} />

        </div>
      </section>

      <br /> <br /> <br />

    </div>
  )
}

export default Home