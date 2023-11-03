import React from 'react'
import Image from "next/image";


function hero() {
  return (
    <div>
      <div
    className="mx-auto max-w-screen-xl bg-primary "

  >

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 order-last lg:h-full"
      >
      
      </div>

      <div className="lg:py-24">
        {/* <span className='text-[#116BFB] my-[30px] text-sm'>Case Study</span> */}
        {/* <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2> */}

        <p className="my-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>

        <a
  className="inline-flex items-center gap-2 rounded-lg border border-white hover:border-indigo-600 px-8 py-2 text-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="/download"
>
  <span className="text-sm font-medium"> View Case Study </span>

  <svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
      </div>
    </div>
  </div>  
    </div>
  )
}

export default hero