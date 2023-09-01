import React from 'react'
import {BiMenu} from 'react-icons/bi'

const Panel = () => {
  return (
    <div className="bg-panelBgColor h-8 flex   items-center gap-4 ">


      <div className= " text-white flex items-center ml-3 cursor-pointer ">
            <div className="text-xl">
            <BiMenu/>
            </div>

            <p className="text-xs font-normal cursor-pointer">
                All
            </p>
       
      </div>

      <div className="text-white cursor-pointer">
        <p className="text-xs font-normal">
            Today's Deals
        </p>
      </div>


      <div className="text-white cursor-pointer">
        <p className="text-xs font-normal">
            Customer Service
        </p>
      </div>


      <div className="text-white cursor-pointer">
        <p className="text-xs font-normal">
            Registry
        </p>
      </div>


      <div className="text-white cursor-pointer">
        <p className="text-xs font-normal">
            Gift Cards
        </p>
      </div>


      <div className="text-white cursor-pointer">
        <p className="text-xs font-normal">
            Sell
        </p>
      </div>

    
    
    </div>
  )
}

export default Panel