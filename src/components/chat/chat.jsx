import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
async function chat() {
  return (

   <section id="chat">
  {/* chat box */}
  <div className="w-11/12 mt-12 h-96 font-sans bg-[#F2F2F2] rounded-xl flex flex-col border shadow-md "
  style={{
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
  }}
  >
    <div className="flex bg-secondary items-center rounded-t-xl justify-between border-primary/75 border-b-4  p-2">
      {/* user info */}
      <div className=" w-full ">
        
        <div className="pl-2">
          <div className=" py-4 font-semibold">
            <a className="hover:underline text-xl text-center font-serif text-white" href="#">
            Health Hero
            </a>
          </div>
        </div>
      </div>
      {/* end user info */}
      {/* chat box action */}
      <div>
        <a className="inline-flex hover:bg-indigo-50 rounded-full p-2" href="#">
       
        </a>
        
      </div>
      {/* end chat box action */}
    </div>
    <div className="flex-1 px-4 py-4 overflow-y-auto">
      {/* chat message */}
      <div className="flex items-center mb-4">
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          
          
          <a href="#" className="block text-xs hover:underline">
          Health Hero
          </a>
        </div>
        <div className="flex-1 bg-[#CAD2C5] text-black p-2  rounded-xl mb-2 relative">
          <div className="px-1" >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          {/* arrow */}
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400" />
          {/* end arrow */}
        </div>
      </div>
      {/* end chat message */}
      {/* chat message */}
      <div className="flex items-center flex-row-reverse mb-4">
        <div className="flex-none flex flex-col items-center space-y-1 ml-4">
          
          <a href="#" className="block text-xs hover:underline">
            User
          </a>
        </div>
        <div className="flex-1  bg-secondary text-white p-2 rounded-xl mb-2 relative">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </div>
          {/* arrow */}
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100" />
          {/* end arrow */}
        </div>
      </div>
      {/* end chat message */}
      {/* chat message */}
     
      {/* end chat message */}
    </div>
    <div className="flex bg-white border-primary/75 border-t-2 items-center  rounded-b-xl p-2">
      {/* chat input action */}
     
      {/* end chat input action */}
      <div className="w-full   ">
        <input
          className="w-full text-black placeholder:text-slate-600  md:placeholder:px-2  md:placeholder:text-lg  border-black border-b-2 focus:ring-0   bg-transparent outline-none active:bg-transparent  md:text-2xl"
          type="text"
          defaultValue=""
          placeholder="write your query"
          autofocus=""
        />
      </div>
      {/* chat send action */}
      <div className=''>
        <button
          className="inline-flex bg-indigo-50 rounded-full p-2"
          type="button"
        >
          <AiOutlineSend />
        </button>
      </div>
      
    </div>
  </div>
</section>

  )
}

export default chat