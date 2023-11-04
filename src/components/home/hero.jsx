"use client";
import Image from "next/image";
import c from "@/assets/c.png";
import c2 from "@/assets/c2.png";
import c3 from "@/assets/c3.png";
import c4 from "@/assets/c4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function hero() {
  return (
    <div>
      <div className=" mt-4  bg-primary md:px-24 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="md:relative px-4 w-full h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            {/* <Carousel className="" slideInterval={5000}>
        <Image src={c}  height="500" width="500"  alt="..." />
        <Image src={c2}  height="500" width="500" alt="..." />
        <Image src={c3}  height="500" width="500" alt="..." />
        <Image src={c4}  height="500" width="500" alt="..." />
      </Carousel> */}
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="mySwiper "
            >
              <SwiperSlide>
                <Image src={c} className="rounded-xl" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={c2} className="rounded-xl" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={c3} className="rounded-xl" alt="..." />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={c4} className="rounded-xl" alt="..." />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex items-center justify-center  gap-4 lg:py-10">
            <div className="flex flex-col gap-4">
              <p className="px-auto text-center md:text-left font-serif text-xl md:text-5xl font-semibold text-secondary">
                Discover a world of healthcare convenience with Chikitsa Salah
              </p>
              <p className="px-auto text-center md:text-left font-sans text-base md:text-xl font-thin text-white">
                From finding the right doctor to receiving expert advice and
                support, we&#39;ve got you covered. It&#39;s time to take
                control of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
