import Button from '@mui/material/Button'
import { RiMenuFold2Line } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { Link } from 'react-router-dom';
import CategorySidePanel from './CategorySidePanel';
import { useState } from 'react';

const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  return (
<>
    <nav className='border-t border-gray-200 py-2'>
        <div className="container flex items-center justify-end gap-5">
            <div className="col_1 w-[20%]">
                <Button className='text-black! gap-2 w-full font-semibold! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'
                    onClick={() => setIsOpenCatPanel(true)}>
                    <RiMenuFold2Line className='text-[18px]' />
                    Shop By Categories
                    <LiaAngleDownSolid className='text-[14px] ml-auto font-bold' />
                    </Button>
            </div>
            <div className='col_2 w-[60%]'>
                <ul className='flex items-center gap-2'>
                    <li className='list-none'>
                        <Link to={"/home"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Home</Button>
                        </Link>
                    </li>
                    <li className='group relative list-none'>
                        <Link to={"/fashion"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Fashion</Button>
                        </Link>
                        {/* Submenu */}
                        <div className='submenu invisible absolute top-full left-0 z-50 min-w-50 bg-white opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:opacity-100'>
                            <ul>
                                <li className='list-none'>
                                    <Link to={"/men"}>
                                    <Button className='w-full justify-start! text-[rgba(0,0,0,0.8)]! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Men</Button>
                                    </Link>
                                </li>
                            </ul>
                            <li className='list-none'>
                                    <Link to={"/women"}>
                                    <Button className='w-full justify-start! text-[rgba(0,0,0,0.8)]! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Women</Button>
                                    </Link>
                                </li>
                            <li className='list-none'>
                                    <Link to={"/boys"}>
                                    <Button className='w-full justify-start! text-[rgba(0,0,0,0.8)]! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Boys</Button>
                                    </Link>
                                </li>
                            <li className='list-none'>
                                    <Link to={"/girls"}>
                                    <Button className='w-full justify-start! text-[rgba(0,0,0,0.8)]! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Girls</Button>
                                    </Link>
                                </li>
                            <li className='list-none'>
                                    <Link to={"/kids"}>
                                    <Button className='w-full justify-start! text-[rgba(0,0,0,0.8)]! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Kids</Button>
                                    </Link>
                                </li>
                        </div>
                    </li>
                    <li className='list-none'>
                        <Link to={"/electronics"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Electronics</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to={"/bags"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Bags</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to={"/footwear"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Footwear</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to={"/groceries"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Groceries</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to={"/beauty"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Beauty</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to={"/wellness"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Wellness</Button>
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to={"/jewellery"} className='link font-medium text-[14px] text-slate-900 transition-colors duration-300 hover:text-indigo-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full'>
                        <Button className='text-slate-600! normal-case! transition-colors duration-300 hover:bg-indigo-50! hover:text-indigo-500!'>Jewellery</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='col_3 w-[20%]'>
                <span className='text-[14px] font-medium flex items-center gap-3 mb-0 mt-0'>
                    <GoRocket className='text-[18px]' />
                    Free International Delivery
                </span>
            </div>
        </div>
    </nav>
    {/* Making Props */}
    <CategorySidePanel  isOpen={isOpenCatPanel} onClose={() => setIsOpenCatPanel(false)}/>
</>
  )
}

export default Navigation