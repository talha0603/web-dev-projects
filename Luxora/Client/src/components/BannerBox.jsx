import { Link } from "react-router-dom"

const BannerBox = (props) => {
  return (
    <div>
        <Link to={"/"}>
        <div className='box bannerBox overflow-hidden rounded-lg group'>
                <img src={props.img} className='w-full transition-all group-hover:scale-105 group-hover:rotate-2' />
        </div>
        </Link>
    </div>
  )
}

export default BannerBox