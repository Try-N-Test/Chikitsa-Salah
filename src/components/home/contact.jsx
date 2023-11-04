"use client"
import { Button  } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/contact.png";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
    emailjs
      .send(
        "service_d1px4bu",
        "template_k3prvhn",
        form.current,
        "OmcnBblli6XgtWXWU",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };
  return (
    <section className="my-20" id="contact">
      <div className="my-12">
        <h1 className="text-center font-serif text-3xl font-bold md:text-5xl">
          Contact <span className="text-secondary">Us</span>
        </h1>
        <h1 className="mt-4 text-center font-sans text-base font-light">
          We would love to hear from you
        </h1>
      </div>

      <div className="mb-12 md:grid md:grid-cols-2">
        <div className="m-12 md:m-0 md:ml-12 ">
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 content-center gap-4 ">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="border-2 border-gray-300 rounded-xl p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-2 border-gray-300 rounded-xl p-2"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="border-2 border-gray-300 rounded-xl p-2"
            ></textarea>
            <Button type="submit" className="mt-4" variant="secondary">
              Send Message
            </Button>
          </form>
        </div>

        <div className="m-12 md:m-0 md:ml-28">
          <Image
            src={image}
            alt="contact"
            className="shadow-custom rounded-xl"
            height={370}
            width={370}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
