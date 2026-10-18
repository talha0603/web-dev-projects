import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import HomeProductsSlider from './HomeProductsSlider'

const categories = [
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
  "Wellness",
  "Jewellery",
]

const HomeProducts = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between gap-6">

          <div className="leftSec">
            <h3 className="text-[22px] font-semibold">Popular Products</h3>
            <p className="text-[14px] font-normal">
              Do not miss the latest offers - these will end in December
            </p>
          </div>

          <div className="rightSec w-[60%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="product categories"
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: '#6366f1' },
                '& .MuiTab-root': {
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#475569',
                },
                '& .MuiTab-root.Mui-selected': { color: '#6366f1' },
                '& .MuiTabScrollButton-root': {
                   width: 32,
                   height: 32,
                   alignSelf: 'center',
                   borderRadius: '50%',
                   color: '#0f172a',
                   transition: 'background-color 0.3s, co                 lor 0.3s',
                '&:hover': {
                   backgroundColor: '#eef2ff',  
                   color: '#6366f1',
                  },
                '&:focus, &:focus-visible, &:active': {
                   backgroundColor: '#eef2ff',
                   outline: 'none',
                  },
                '&.Mui-disabled': { opacity: 0.3 },
                  },
              }}
            >
              {categories.map((name) => (
                <Tab key={name} label={name} />
              ))}
            </Tabs>
          </div>

        </div>

        <HomeProductsSlider items={5} />
      </div>
    </section>
  )
}

export default HomeProducts