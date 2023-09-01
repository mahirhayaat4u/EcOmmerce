import React from "react";
import { imgUrl } from "../data";
const Feature = ({ url }) => {
  return (
    <div className="absolute top-[350px] h-[500px]  w-full flex   justify-evenly gap-5 m-auto px-4 group     ">
      <div className="max-w-[310] w-full h-[400px] bg-amber-50 cursor-pointer shadow-2xl group-hover:scale-100 ">
        <div>
          <p className="flex items-center py-2 px-3 font-bold">
            Keep Shopping For
          </p>
          <div className="flex justify-evenly py-3 ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden  ">
                <img
                  alt="product"
                  src={imgUrl[0].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[3].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[2].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[1].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[310] w-full h-[400px] bg-white shadow-2xl ">
        <div>
          <p className="flex items-center py-2 px-3 font-bold">
            Pick up where you left off
          </p>
          <div className="flex justify-evenly py-3 ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[0].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[3].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[2].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[1].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[310] w-full h-[400px] bg-white shadow-2xl ">
        <div>
          <p className="flex items-center py-2 px-3 font-bold">
            Footwear & handbags
          </p>
          <div className="flex justify-evenly py-3 ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[0].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[3].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[2].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[1].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[310] w-full h-[400px] bg-white shadow-2xl ">
        <div>
          <p className="flex items-center py-2 px-3 font-bold">
            Keep Shopping For
          </p>
          <div className="flex justify-evenly py-3 ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[0].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[3].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div className="">
              <div className="w-[111px] h-[111px]  overflow-y-hidden">
                <img
                  alt="product"
                  src={imgUrl[2].url}
                  width="110px"
                  height="111px"
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
            <div>
              <div className="w-[111px] h-[111px]  overflow-y-hidden ">
                <img
                  alt="product"
                  src={imgUrl[1].url}
                  width="110px"
                  height="111px"
                  
                />
              </div>

              <p className="text-sm font-medium">Laptop</p>
              <p className="text-xs">2 viewed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
