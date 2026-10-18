import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import { IoCloseSharp } from "react-icons/io5";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";


/* =====================================================
   PART 1: DATA
   All the text of the panel lives here. Each name is
   used only once, so nothing is duplicated.

   - Fashion has "children" (Apparel, Outerwear, Footwear)
   - Each child has "items" (the final links)
   - Categories without "children" are plain links
   ===================================================== */
const categories = [
  {
    name: "Fashion",
    children: [
      {
        name: "Apparel",
        items: ["Crepe T-Shirt", "Denim Jeans", "Summer Dress", "Hoodie"],
      },
      {
        name: "Outerwear",
        items: ["Leather Jacket", "Winter Coat", "Rain Jacket", "Blazer"],
      },
      {
        name: "Footwear",
        items: ["Sneakers", "Leather Boots", "Sandals", "Formal Shoes"],
      },
    ],
  },
  { name: "Jewellery" },
  { name: "Watches" },
  { name: "Cosmetics" },
  { name: "Accessories" },
  { name: "Electronics" },
  { name: "Furniture" },
]


/* =====================================================
   PART 2: HELPER FUNCTION
   Turns a name into a URL-friendly word:
   "Crepe T-Shirt" -> "crepe-t-shirt"
   ===================================================== */
const slug = (text) => text.toLowerCase().replace(/\s+/g, '-')


/* =====================================================
   PART 3: BUTTON STYLES (written once, used many times)
   level1 = main category   (Fashion)
   level2 = sub category    (Apparel)
   level3 = final item      (Crepe T-Shirt)
   "pl-8!" and "pl-14!" push deeper levels to the right.
   ===================================================== */
const level1Class =
  "w-full justify-start! gap-2 px-3! text-left! normal-case! text-[14px]! font-medium! text-slate-600! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!"

const level2Class =
  "w-full justify-start! gap-2 pl-8! pr-3! text-left! normal-case! text-[14px]! font-medium! text-slate-600! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!"

const level3Class =
  "w-full justify-start! pl-14! text-left! normal-case! text-[13px]! text-slate-500! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!"


/* =====================================================
   PART 4: THE COMPONENT
   Props from the parent (Navigation):
   - isOpen : true/false, should the drawer be open?
   - onClose: function that closes the drawer
   ===================================================== */
const CategorySidePanel = ({ isOpen, onClose }) => {

  // openList remembers which rows are expanded.
  // Example: ["/fashion", "/fashion/apparel"]
  const [openList, setOpenList] = useState([])

  // toggle: if the row is open, close it. If closed, open it.
  const toggle = (key) => {
    if (openList.includes(key)) {
      setOpenList(openList.filter((k) => k !== key)) // remove from list = close
    } else {
      setOpenList([...openList, key])                // add to list = open
    }
  }

  const DrawerList = (
    <Box sx={{ width: 260 }} role="presentation">

      {/* Title and close (X) button */}
      <h3 className='p-3 text-[16px] font-semibold flex items-center justify-between'>
        Shop By Categories
        <IoCloseSharp onClick={onClose} className='cursor-pointer text-[20px]' />
      </h3>

      {/* Scrollable list */}
      <div className='scroll h-[calc(100vh-56px)] overflow-y-auto'>
        <ul>

          {/* ---------- LEVEL 1: Fashion, Jewellery, ... ---------- */}
          {categories.map((cat) => {
            const p1 = `/${slug(cat.name)}`            // e.g. /fashion

            return (
              <li key={p1} className="list-none">

                {/* Has children? Button only opens/closes.
                    No children? Button is a link to a page. */}
                {cat.children ? (
                  <Button onClick={() => toggle(p1)} className={level1Class}>
                    {cat.name}
                    {openList.includes(p1)
                      ? <FiMinusSquare className="ml-auto text-[18px]" />
                      : <FiPlusSquare className="ml-auto text-[18px]" />}
                  </Button>
                ) : (
                  <Button component={Link} to={p1} onClick={onClose} className={level1Class}>
                    {cat.name}
                  </Button>
                )}

                {/* ---------- LEVEL 2: Apparel, Outerwear, Footwear ---------- */}
                {cat.children && (
                  <Collapse in={openList.includes(p1)}>
                    <ul>
                      {cat.children.map((sub) => {
                        const p2 = `${p1}/${slug(sub.name)}`   // e.g. /fashion/apparel

                        return (
                          <li key={p2} className="list-none">

                            <Button onClick={() => toggle(p2)} className={level2Class}>
                              {sub.name}
                              {openList.includes(p2)
                                ? <FiMinusSquare className="ml-auto text-[18px]" />
                                : <FiPlusSquare className="ml-auto text-[18px]" />}
                            </Button>

                            {/* ---------- LEVEL 3: final items (links) ---------- */}
                            <Collapse in={openList.includes(p2)}>
                              <ul>
                                {sub.items.map((item) => {
                                  const p3 = `${p2}/${slug(item)}`  // e.g. /fashion/apparel/hoodie

                                  return (
                                    <li key={p3} className="list-none">
                                      <Button component={Link} to={p3} onClick={onClose} className={level3Class}>
                                        {item}
                                      </Button>
                                    </li>
                                  )
                                })}
                              </ul>
                            </Collapse>

                          </li>
                        )
                      })}
                    </ul>
                  </Collapse>
                )}

              </li>
            )
          })}

        </ul>
      </div>
    </Box>
  )

  return (
    <Drawer open={isOpen} onClose={onClose}>
      {DrawerList}
    </Drawer>
  )
}

export default CategorySidePanel