import React from 'react'
import Image from "next/image";

function hero() {
  return (
    <div>
      <div
    className=" mt-16  bg-primary py-12 px-24"

  >

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
      
      </div>

      <div className="lg:py-10 flex items-center  justify-center">

        <p className="px-auto text-center  text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa viverra, dignissim ligula tempor, interdum velit. In molestie ante sed magna pretium elementum. Quisque interdum felis ac eleifend interdum. Integer eget nisl non elit ultricies varius eu eget mi. Ut gravida semper risus eget eleifend. Sed neque urna, porttitor quis auctor eget, fermentum quis diam. Praesent nec magna ut dui ullamcorper ultricies. Aliquam tincidunt nulla id lobortis convallis. Nam augue nisl, aliquam quis urna vitae, mollis varius orci. Etiam id elit arcu.
        </p>

  
      </div>
    </div>
  </div>  
    </div>
  )
}

export default hero