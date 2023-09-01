import React  from "react";

import logo from "../images/logo.png";
import flag from "../images/flag.svg";
import { BiMap, BiSearch, BiCartAlt } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
    
  return (
    <div className="h-12 flex items-center bg-navBg text-white justify-evenly ">


                <div className="w-[113px] h-[60px]  ">
                    <img src={logo} alt="logo" className="w-full h-[45px]  mt-2" />
                </div>



                <div >
                    <p className="text-xs text-addressColor ml-5">Deliver to</p>

                    <div className="flex items-center ">
                    <BiMap />
                    <p className="text-sm  ml-1">India</p>
                    </div>
                </div>



                <div className=" flex w-[800px]   h-8   rounded">
                    <select className="text-black bg-selectColor w-[60px] text-center rounded-s border-none cursor-pointer  ">
                    <option>All</option>
                    </select>

                    <input placeholder="Search Amazon" type="text"   className="w-full  " />

                    <div className="flex items-center w-[60px] justify-center text-black bg-amber-400 cursor-pointer rounded-e text-2xl ">
                    <BiSearch />
                    </div>
                </div>


                <div className="flex w-[74px] h-10 font-san items-center mt-3 cursor-pointer">
                    <img src={flag} alt="logo" className="w-[25px] h-6" />
                    <div className="flex ">
                            <p className=" text-base ml-1 ">
                            EN  
                            </p>
                            <div className="mt-2 text-EnColor">
                              <MdArrowDropDown />
                            </div>
                            

                    </div>
                    
                </div>


                <div className="w-[132] h-10 cursor-pointer">
                    <p className="text-xs">Hello ,sign in </p>
                    <div className="flex">
                            <p className="text-sm font-semibold "> Account and Lists </p>
                            <div className="text-EnColor mt-1">
                               <MdArrowDropDown />
                            </div>
                            

                    </div>
                   
                </div>


                <div className="cursor-pointer ">
                    <p className="text-xs  ">
                    Returns 
                    </p>
                    <p className="text-sm font-semibold">& Orders</p>
                </div>

                <div className="flex">
                    <div className="text-4xl">
                        <BiCartAlt />
                    </div>
                    
                    <p className="text-sm flex items-end">Cart</p>
                </div>
    </div>
  );
};

export default Navbar;
