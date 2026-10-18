import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { IoIosGitCompare } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import Search from './Search'
import Navigation from './Navigation'

const Nav = () => {
  return (
    <header className="bg-white shadow ">
      <div className="py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">

          
          <div className="col1 w-[23%]">
            <Link to="/">
              <img src="/Screen.png" alt="Luxora" className="h-14" />
            </Link>
          </div>

          
          <div className="col2 w-[45%]">
            <Search />
          </div>

          
          <div className="col3 flex w-[30%] items-center justify-end">
            <ul className="flex items-center gap-5 text-sm font-medium">
              <li className="flex list-none items-center gap-2">
                <Link
                  to="/login"
                  className="text-slate-900 transition-colors hover:text-indigo-500"
                >
                  Login
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  to="/register"
                  className="text-slate-900 transition-colors hover:text-indigo-500"
                >
                  Register
                </Link>
              </li>

              <li className="flex list-none items-center gap-2">
                <Link
                  to="/compare"
                  aria-label='Compare'
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-900 transition-colors hover:bg-indigo-50 hover:text-indigo-500"
                >
                  <IoIosGitCompare />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs text-white">
                    0
                  </span>
                  <span className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    Compare
                  </span>
                </Link>
                <Link
                  to="wishlist"
                  aria-label='Wishlist'
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-900 transition-colors hover:bg-indigo-50 hover:text-indigo-500"
                >
                  <IoIosHeartEmpty />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs text-white">
                    0
                  </span>
                  <span className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    Wishlist
                  </span>
                </Link>
                <Link
                  to="/cart"
                  aria-label='Cart'
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-900 transition-colors hover:bg-indigo-50 hover:text-indigo-500"
                >
                  <IoCartOutline />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs text-white">
                    0
                  </span>
                  <span className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    Cart
                  </span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/*  */}
      <div className='bg-white'>
        <Navigation />
      </div>
    </header>
  )
}

export default Nav