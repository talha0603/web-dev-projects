import { Swiper, SwiperSlide } from 'swiper/react';
import Stylish from '../assets/real_product_photo_of_a_silver_laptop_black_wireless_headphones_and_a.png'
import Stylish1 from '../assets/candid_photo_of_a_confident_man_in_a_charcoal_suit_adjusting_his_wristwatch.png'
import Stylish2 from '../assets/real_interior_photo_of_a_modern_living_room_with_a_terracotta_orange_linen_sofa.png'
import Stylish3 from '../assets/real_photo_of_an_elegant_woman_wearing_a_simple_gold_necklace_and_pearl.png'
import Stylish4 from '../assets/premium_smartphone.png'
import Stylish5 from '../assets/stylish_woman_in_the_center.png'
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css'
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <>
    <div className='homeSlider py-4'>
        <div className='container'>
    <Swiper 
    spaceBetween={10} 
    navigation={true} 
    autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
    modules={[Navigation , Autoplay]} 
    className="mySwiper">
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src={Stylish1} alt="Fashion" className='h-20px w-full object-cover md:h-112.5' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className='item rounded-[20px] overflow-hidden'>
            <img src={Stylish2} alt="Happy Mans" className='h-20px w-full object-cover md:h-112.5' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src={Stylish5} alt="Stylish" className='h-20px w-full object-cover md:h-112.5' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src={Stylish3} alt="Elegant" className='h-20px w-full object-cover md:h-112.5' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src={Stylish4} alt="Premium" className='h-20px w-full object-cover md:h-112.5' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img src={Stylish} alt="Center" className='h-20px w-full object-cover md:h-112.5' />
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  )
}

export default HomeSlider
