import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
async function chat() {
  return (
   <>
   <>
  {/* chat box */}
  <div className="w-11/12 mt-12 h-96 bg-background flex flex-col border shadow-md ">
    <div className="flex items-center justify-between border-b p-2">
      {/* user info */}
      <div className="flex items-center">
        
        <div className="pl-2">
          <div className="font-semibold">
            <a className="hover:underline" href="#">
              chat bot
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
            John Doe
          </a>
        </div>
        <div className="flex-1 bg-primary text-black p-2 rounded-xl mb-2 relative">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
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
            Jesse
          </a>
        </div>
        <div className="flex-1  bg-secondary text-gray-800 p-2 rounded-xl mb-2 relative">
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
    <div className="flex items-center border-t p-2">
      {/* chat input action */}
     
      {/* end chat input action */}
      <div className="w-full mx-2">
        <input
          className="w-full md:px-4 bg-transparent rounded-lg border border-gray-200"
          type="text"
          defaultValue=""
          placeholder="Aa"
          autofocus=""
        />
      </div>
      {/* chat send action */}
      <div className=''>
        <button
          className="inline-flex hover:bg-indigo-50 rounded-full p-2"
          type="button"
        >
          <AiOutlineSend />
        </button>
      </div>
      
    </div>
  </div>
</>

   </>
  )
}

export default chat