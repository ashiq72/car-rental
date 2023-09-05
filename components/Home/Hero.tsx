"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { UserButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <div className="bg-transparent  w-full relative overflow-hidden ">
      <div className=" top-0">
        {/* Slider for large screen  */}
        <div className="hidden lg:flex">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            // style={{
            //   "--swiper-navigation-color": "#fff",
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Image
                src="https://i.postimg.cc/jdYP1NpK/3.jpg"
                alt=""
                height={300}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://i.postimg.cc/ZntGzCL2/1.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://i.postimg.cc/rFZrhMm5/2.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://i.postimg.cc/T2LJFThj/pexels-andrea-piacquadio-760015-1.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Slider for small screen  */}
        <div className="lg:hidden sm:flex">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            // style={{
            //   "--swiper-navigation-color": "#fff",
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Image
                src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/1/r1-mb-23082023.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/2/r2-mb-23082023.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/3/r3-mb-23082023-revised.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/4/r4-mb-23082023-revised.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/5/r5-mb-23082023.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Navber  */}
        <div className=" w-full absolute z-10  top-0">
          <div className="flex items-center justify-between p-2 px-20 shadow-sm border-b-[1px] ">
            <Link href="/">
              <Image src="/logo.png" alt="" height={150} width={150} />
            </Link>
            <div className="hidden md:flex gap-5">
              <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
                Home
              </h2>
              <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
                History
              </h2>
              <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
                Content
              </h2>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
