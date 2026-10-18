import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import watch from '../assets/categories/watch.png'
import bag from '../assets/categories/bag.png'
import chair from '../assets/categories/chair.png'
import headphone from '../assets/categories/headphone.png'
import perfume from '../assets/categories/perfume.png'
import shirt from '../assets/categories/shirt.png'
import jewellery from '../assets/categories/jewellery.png'


const CatSlider = () => {
  return (
    <>
    <div className="cat-slider pt-4 py-8">
        <div className="container">
            <Swiper
        slidesPerView={6}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="catSwiper"
      >
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={headphone} alt="Headphone" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Headphone</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={chair} alt="Wooden Chair" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Chair</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={bag} alt="Bag" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Bag</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={perfume} alt="Perfume" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Perfume</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={shirt} alt="Shirt" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Shirt</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={watch} alt="Watch" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Watch</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={"/"}>
            <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                <img src={jewellery} alt="Jewellery" className='img-transition w-15 h-15' />
                <h3 className='text-[15px] font-medium mt-3'>Jewellery</h3>
            </div>
            </Link>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
    </>
  )
}

export default CatSlider