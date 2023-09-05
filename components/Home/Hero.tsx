"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import { BsFillCarFrontFill } from "react-icons/bs";
import { UserButton } from "@clerk/nextjs";
import { BiSolidLike } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="bg-transparent bg-opacity-400 w-full relative overflow-hidden ">
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
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/jdYP1NpK/3.jpg"
                  alt=""
                  height={300}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/ZntGzCL2/1.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <Image
                src="https://i.postimg.cc/rFZrhMm5/2.jpg"
                alt=""
                height={900}
                width={1920}
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="carousel-item">
                <Image
                  src="https://i.postimg.cc/T2LJFThj/pexels-andrea-piacquadio-760015-1.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </div>
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
              {/* <Image src="/logo.png" alt="" height={150} width={150} /> */}
              <h1 className="text-white font-extrabold text-2xl flex items-center">
                <span className="text-yellow-500 pr-1">
                  <BsFillCarFrontFill />
                </span>
                <span className="text-yellow-500 pr-1">Car </span>
                Rental
                <span className="text-yellow-500">.</span>
              </h1>
            </Link>
            <div className="hidden md:flex gap-5 text-white text-lg">
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
        {/* Text section  */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 z-20 flex-col lg:pl-16">
          <div>
            <div className="bg-slate-100 flex items-center rounded-2xl px-3 py-1 w-fit">
              <span className="text-yellow-600 pr-2">
                <BiSolidLike />
              </span>
              {"  "}
              100% Trusted car rental platform in the Bangladesh
            </div>
            <h1 className="text-6xl pt-3 font-bold text-white">
              Find Your Best Car for
              <br />
              <span className="text-yellow-500"> Rental</span>
            </h1>
            <p className="text-xl text-white pt-5">
              Everything your taxi business needs is already here!
            </p>
            <div className="flex pt-5">
              <button className="btn btn-success mr-5">
                <Link href="#">Explore Now</Link>
              </button>
              <button className="btn btn-outline btn-success">
                <Link href="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
