"use client";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/shared/Loader";

// Default values shown

function Consultancy() {
  const api = axios.create({
    baseURL: "https://chikitsa-salah.vercel.app",
  });

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      let { data } = await api.post(`/doctors?paragraph=${query}`);
      setResponse(data);
      setLoader(false);
    } catch (error) {
      setResponse("No Doctor found!");
      setLoader(false);
    }
  };
  // console.log(response, "test");
  return (
    <>
      {loader && <Loader />}
      <div className="bg-background">
        <h2 className="flex justify-center pt-5 font-sans text-3xl font-medium uppercase">
          Recommendations{" "}
        </h2>
        {/* <div className="grid grid-cols-3 gap-3 ">
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
        </div> */}
        <div>
          <section className="my-4 flex justify-center pt-5">
            {/* chat box */}
            <div
              className="flex h-96  w-4/5 flex-col rounded-xl border bg-[#F2F2F2] font-sans shadow-md md:w-1/2 "
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
                    <div className="px-1">
                      May I request a description of the symptoms that are
                      troubling you?
                    </div>
                    {/* arrow */}
                    <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400" />
                    {/* end arrow */}
                  </div>
                </div>
                {response ? (
                  response !== "No Doctor found!" ? (
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 flex flex-none flex-col items-center space-y-1">
                        <a href="#" className="block text-xs hover:underline">
                          Health Hero
                        </a>
                      </div>
                      <div className="relative mb-2 flex-1 rounded-xl  bg-[#CAD2C5] p-2 text-black">
                        <div className="px-1">
                          You may consult any doctor recommended below.
                        </div>
                        {/* arrow */}
                        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400" />
                        {/* end arrow */}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 flex items-center">
                        <div className="mr-4 flex flex-none flex-col items-center space-y-1">
                          <a href="#" className="block text-xs hover:underline">
                            Health Hero
                          </a>
                        </div>
                        <div className="relative mb-2 flex-1 rounded-xl  bg-[#CAD2C5] p-2 text-black">
                          <div className="px-1">No Doctor found!</div>
                          {/* arrow */}
                          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400" />
                          {/* end arrow */}
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  <></>
                )}
                {/* end chat message */}
                {/* chat message */}

                {/* end chat message */}
                {/* chat message */}

                {/* end chat message */}
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex items-center rounded-b-xl border-t-2 border-primary/75 bg-white p-2"
              >
                <div className="w-full">
                  <input
                    className="w-full border-b-2 border-black bg-transparent text-black outline-none placeholder:text-slate-600 focus:ring-0 active:bg-transparent md:text-2xl md:placeholder:px-2 md:placeholder:text-lg"
                    type="text"
                    value={query} // Bind the value to the state
                    placeholder="write your symptoms"
                    autoFocus={true}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }} // Use autoFocus to set autofocus
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
        {/* <h3 className="mb-2 mt-16 text-center font-serif text-3xl font-semibold text-slate-950 md:mb-8">
          Consult these <span className="text-primary">Doctors</span>{" "}
        </h3> */}

        {response === "" ? (
          <></>
        ) : response == "No Doctor found!" ? (
          <h3 className="mb-2 mt-16 text-center font-serif text-3xl font-semibold text-slate-950 md:mb-8">
            No <span className="text-primary">Doctor</span> found😢{" "}
          </h3>
        ) : (
          <h3 className="mb-2 mt-16 text-center font-serif text-3xl font-semibold text-slate-950 md:mb-8">
            Consult these <span className="text-primary">Doctors</span>{" "}
          </h3>
        )}
        
        <div className="mx-4  grid grid-cols-1 gap-4 py-16 md:mx-36 md:grid-cols-3">
          {response.data?.map((item, id) => {
            console.log(item, "k");
            return (
              <div
                className="flex h-80 w-80 flex-col items-center space-y-4 rounded-xl bg-secondary py-12"
                key={id}
              >
                <div className="font-serif text-3xl font-semibold text-slate-950">
                  {item.name}
                </div>
                <div className="font-base font-sans text-2xl text-background">
                  ({item.degree})
                </div>

                <div className="font-serif text-xl font-semibold text-slate-950">
                  Speciality:{" "}
                  <span className="text-background">{item.specialty}</span>
                </div>

                <div className="font-sans text-2xl font-medium text-primary">
                  {item.experience}+ Years of Experience
                </div>

                <div className="text-md font-sans">
                  Contact Number: +91 {item.phoneNumber}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default Consultancy;
