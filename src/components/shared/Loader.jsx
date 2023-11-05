import React from 'react'
import { spiral } from 'ldrs'

spiral.register()

// Default values shown

function Loader() {
    return (
        <>
            <div class="fixed top-0  left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-background/75  flex flex-col items-center justify-center">
                <div class=" ">
                    <div class=""></div>
                    <div id="">
                    {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin "></div> */}
                    <l-spiral
  size="40"
  speed="0.9"
  color="#59C3C3"
></l-spiral>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader