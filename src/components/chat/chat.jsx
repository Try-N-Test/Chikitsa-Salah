"use client";
import { useState, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import { Button } from "@/components/ui/button";
function Chat() {
  const api = axios.create({
    baseURL: "http://localhost:8000",
  });

  // http://localhost:8000/chat?question=I am suffering from fever

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setResponse("Loading...");
      const { data } = await api.post(`/chat?question=${query}`);
      const formattedResponse = formatResponse(data.response);

      // Update response directly in the state
      setResponse(formattedResponse);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const formatResponse = (response) => {
  const sections = response.split("**").filter(Boolean);
  return sections.map((section, index) => {
    const sectionContent = section.split("*").filter(Boolean);
    const sectionTitle = sectionContent.shift().trim();

    return (
      <div key={index} className="response-section">
        <h3>{sectionTitle}</h3>
        <ul>
          {sectionContent.map((item, itemIndex) => (
            <li key={itemIndex}>{item.trim()}</li>
          ))}
        </ul>
      </div>
    );
  });
};

  return (
    <section className=" flex justify-center w-11/12">
      {/* chat box */}
      <div
        className="flex  h-96 w-11/12 flex-col rounded-xl border bg-[#F2F2F2] font-sans shadow-md "
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
              <div className="px-1">Hi, How may I help you?</div>
              {/* arrow */}
              <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400" />
              {/* end arrow */}
            </div>
          </div>
          {/* end chat message */}
          {/* chat message */}

          {query !== 0 ? (
            <>
              <div className="mb-4 flex flex-row-reverse items-center">
                <div className="ml-4 flex flex-none flex-col items-center space-y-1">
                  <a href="#" className="block text-xs hover:underline">
                    User
                  </a>
                </div>
                <div className="relative  mb-2 flex-1 rounded-xl bg-secondary p-2 text-white">
                  <div>
                    {query}
                  </div>
                  {/* arrow */}
                  <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 rotate-45 transform bg-indigo-100" />
                  {/* end arrow */}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="mb-4 flex items-center">
            <div className="mr-4 flex flex-none flex-col items-center space-y-1">
              <a href="#" className="block text-xs hover:underline">
                Health Hero
              </a>
            </div>
            <div className="relative mb-2 flex-1 rounded-xl  bg-[#CAD2C5] p-2 text-black">
              <div className="px-1">{response}</div>
              {/* arrow */}
              <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400" />
              {/* end arrow */}
            </div>
          </div>
          {/* end chat message */}
          {/* chat message */}

          {/* end chat message */}
        </div>
        {/*form*/}
        <form
          onSubmit={handleSubmit}
          className="flex items-center rounded-b-xl border-t-2 border-primary/75 bg-white p-2"
          
        >
          <div className="w-full">
            <input
              className="w-full border-b-2 border-black bg-transparent text-black outline-none placeholder:text-slate-600 focus:ring-0 active:bg-transparent md:text-2xl md:placeholder:px-2 md:placeholder:text-lg"
              type="text"
              value={query} // Bind the value to the state
              placeholder="write your query"
              autoFocus={true} // Use autoFocus to set autofocus
              onChange={(e) => {setQuery(e.target.value)}} // Update query state
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
  );
}

export default Chat;
