"use client"

import React from 'react'


// Default values shown

function Loader() {
    return (
        <>
            <div class="fixed top-0  left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-background/75  flex flex-col items-center justify-center">
                <div class=" ">
                    <div class=""></div>
                    <div id="">
                    <div className="w-16 h-16 bg-primary border-4 border-dashed rounded-full animate-spin "></div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader