import '../App.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'

const ProductItem = ({ img, brand, name, price, discount, rating = 4 }) => {
  const finalPrice = discount ? price - (price * discount) / 100 : price

  return (
    <div className="productItem rounded-md overflow-hidden">
      <div className="imgWrapper w-full h-62.5 rounded-t-md overflow-hidden relative">
        <img src={img} alt={name} className="h-full w-full object-cover object-top" />
        {discount && <span className="discount">{discount}% OFF</span>}
      </div>

      <div className="info p-3 bg-white">
        <h6 className="text-[14px]">
          <Link to="/" className="link">{brand}</Link>
        </h6>
        <h3 className="title text-[16px] mt-2 font-medium mb-2">
          <Link to="/" className="link">{name}</Link>
        </h3>
        <Rating name="size-small" defaultValue={rating} size="small" readOnly />

        <div className="priceWrap mt-2 flex items-center gap-3">
          {discount && <span className="oldPrice">${price.toFixed(2)}</span>}
          <span className="price">${finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem