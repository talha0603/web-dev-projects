import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductItem from './ProductItem'

import Sharara from '../assets/productItems/young_woman_model_wearing_a_deep_red_embroidered_sharara_set_with_a_matching.png'
import Yoga from '../assets/productItems/rolled_sage_green_yoga_mat_standing_upright_beside_a_small_white_candle_and_a.png'
import Bag from '../assets/productItems/tan_leather_structured_handbag_with_gold_hardware_three_quarter_view_on_a_soft.png'
import Chair from '../assets/productItems/modern_wooden_accent_chair_with_a_dusty_pink_cushion_and_slim_legs_three.png'
import Serum from '../assets/productItems/glass_serum_dropper_bottle_with_a_gold_cap_and_a_matching_cream_jar_standing.png'
import Watch from '../assets/productItems/modern_smartwatch_with_a_dark_round_face_and_a_navy_silicone_strap_standing.png'
import Headphone from '../assets/productItems/headphone1.png'


const products = [
  { id: 1, img: Sharara,   brand: 'Noorique',         name: 'Deep Red Embroidered Sharara',          price: 120, discount: 25, rating: 4 },
  { id: 2, img: Yoga,      brand: 'Style With Smile', name: 'Sage Green Rolled Yoga Mat',            price: 40,  discount: 5,  rating: 5 },
  { id: 3, img: Bag,       brand: 'Maison Zara Luxe', name: 'Tan Leather Structured Handbag',        price: 200, discount: 10, rating: 4 },
  { id: 4, img: Chair,     brand: 'Modern Vibes',     name: 'Modern Wooden Chair With Pink Cushion', price: 150, discount: 15, rating: 5 },
  { id: 5, img: Serum,     brand: 'Veloura',          name: 'Glass Serum Dropper With Golden Cap',   price: 60,  discount: 5,  rating: 4 },
  { id: 6, img: Watch,     brand: 'Soierra',          name: 'Smart Watch With Modern Round Shape',   price: 180,               rating: 5 },
  { id: 7, img: Headphone, brand: 'Aurelle',          name: 'M7 Wireless Over-Ear Headphones',       price: 99,  discount: 30, rating: 4 },
]

const HomeProductsSlider = ({ items }) => {
  return (
    <div className="py-5">
      <Swiper
        slidesPerView={items}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="p-3 pb-8">
              <ProductItem img={p.img} brand={p.brand} name={p.name} price={p.price} discount={p.discount} rating={p.rating} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeProductsSlider