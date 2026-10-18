import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Banner7 from '../assets/adsBanner/banner7.png'
import Banner2 from '../assets/adsBanner/banner2.png'
import Banner3 from '../assets/adsBanner/banner3.png'
import Banner4 from '../assets/adsBanner/banner4.png'
import Banner5 from '../assets/adsBanner/banner5.png'
import Banner6 from '../assets/adsBanner/banner6.png'
import BannerBox from './BannerBox';


const AdsBanner = (props) => {
  return (
    <div className='py-5'>
        <div className='homeSlider py-4 w-full'>
        <div className='container'>
    <Swiper 
    slidesPerView={props.items} 
    spaceBetween={10}
    navigation={true}
    modules={[Navigation]} 
    className="catSwiper">

        <SwiperSlide>
            <BannerBox img={Banner2} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={Banner3} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={Banner4} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={Banner5} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={Banner6} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={Banner7} link={'/'} />
        </SwiperSlide>

      </Swiper>
      </div>
      </div>
    </div>
  )
}

export default AdsBanner