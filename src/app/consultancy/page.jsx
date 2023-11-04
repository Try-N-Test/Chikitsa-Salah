"use client";
import React from "react";
import Filter from "@/components/consultancy/filter";
import { AiOutlineSend } from "react-icons/ai";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dummyData = {
  _id: "654569b8e1316ca328b7c996",
  name: "Dr. John Doe",
  degree: "MD",
  email: "john.doe@example.com",
  experience: 10,
  keywords: ["fever", "cold", "cough"],
  phoneNumber: 1234567890,
  specialty: "Cardiology",
};

function consultancy() {
  return (
    <div className="bg-background">
      <h2 className="flex justify-center font-sans text-3xl font-medium uppercase">
        Recommendations{" "}
      </h2>
      <div className="grid grid-cols-3 gap-3 ">
        <div className="mx-auto">
          <Select className="">
            <SelectTrigger className="w-[180px] rounded-xl border-secondary text-secondary">
              <SelectValue placeholder="Filter by rating" />
            </SelectTrigger>
            <SelectContent className=" bg-secondary">
              <SelectItem value="hightToLow">High to Low</SelectItem>
              <SelectItem value="lowToHighS">Low to High</SelectItem>
              <SelectItem value="system">best</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <section className="my-4 flex justify-center">
          {/* chat box */}
          <div
            className="flex  h-96 w-1/2 flex-col rounded-xl border bg-[#F2F2F2] font-sans shadow-md "
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <div className="flex items-center justify-between rounded-t-xl border-b-4 border-primary/75 bg-secondary  p-2">
              {/* user info */}
              <div className=" w-full ">
                <div className="pl-2">
                  <div className=" py-4 font-semibold">
                    <a
                      className="text-center font-serif text-xl text-white hover:underline"
                      href="#"
                    >
                      Health Hero
                    </a>
                  </div>
                </div>
              </div>
              {/* end user info */}
              {/* chat box action */}
              <div>
                <a
                  className="inline-flex rounded-full p-2 hover:bg-indigo-50"
                  href="#"
                ></a>
              </div>
              {/* end chat box action */}
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* chat message */}
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex flex-none flex-col items-center space-y-1">
                  <a href="#" className="block text-xs hover:underline">
                    Health Hero
                  </a>
                </div>
                <div className="relative mb-2 flex-1 rounded-xl  bg-[#CAD2C5] p-2 text-black">
                  <div className="px-1">Do you want to consult a doctor</div>
                  {/* arrow */}
                  <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400" />
                  {/* end arrow */}
                </div>
              </div>
              {/* end chat message */}
              {/* chat message */}
              <div className="mb-4 flex flex-row-reverse items-center">
                <div className="ml-4 flex flex-none flex-col items-center space-y-1">
                  <a href="#" className="block text-xs hover:underline">
                    User
                  </a>
                </div>
                <div className="relative  mb-2 flex-1 rounded-xl bg-secondary p-2 text-white">
                  <div>yes</div>
                  {/* arrow */}
                  <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 rotate-45 transform bg-indigo-100" />
                  {/* end arrow */}
                </div>
              </div>
              {/* end chat message */}
              {/* chat message */}

              {/* end chat message */}
            </div>
            <form
              onSubmit={""}
              className="flex items-center rounded-b-xl border-t-2 border-primary/75 bg-white p-2"
            >
              <div className="w-full">
                <input
                  className="w-full border-b-2 border-black bg-transparent text-black outline-none placeholder:text-slate-600 focus:ring-0 active:bg-transparent md:text-2xl md:placeholder:px-2 md:placeholder:text-lg"
                  type="text"
                  value={""} // Bind the value to the state
                  placeholder="write your query"
                  autoFocus={true} // Use autoFocus to set autofocus
                />
              </div>

              <div>
                <Button
                  className="inline-flex rounded-full bg-indigo-50 p-2"
                  type="submit" // Use type="submit" for form submission
                >
                  <AiOutlineSend />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div className="flex h-80 w-80 flex-col items-center space-y-4 bg-secondary py-12 rounded-xl">
        <div className='font-serif text-3xl text-slate-950 font-semibold'>{dummyData.name}</div>
        <div className='font-sans text-2xl text-background font-base'>{dummyData.degree}</div>

        <div className='font-serif text-xl text-slate-950 font-semibold'>Speciality: <span className='text-background'>{dummyData.specialty}</span></div>

        <div className='font-sans text-2xl text-primary font-medium'>{dummyData.experience}+ Years of Experience</div>

        <div className='font-sans text-sm'>Contact Number: +91 {dummyData.phoneNumber}</div>
      </div>
    </div>
  );
}

export default consultancy;
