"use client"

import {useState} from "react";
import { IoClose,IoMenu } from "react-icons/io5";
import clsx from "clsx";
const Navlink = () => {
  const [open,setOpen ] = useState(false);
  return (
    <>
        <button 
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-mdmd:hidden hover:bg-gray-100">
              {!open ? <IoMenu className="size-8"/> : <IoClose className="size-8"/>}
        </button>
        <div className={clsx("w-full md:block md:w-auto",{
          "hidden" : !open
        })}>
          <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center
          md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white
          ">
            <li>

            </li>
          </ul>
        </div>
    </>
  );
};

export default Navlink;
