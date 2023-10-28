"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";

import Footer from "@/components//Shared/Footer/Footer";
// import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import HomePage from "@/components/Home/Home/HomePage";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  // useEffect(() => {
  //   getCarList_();
  // }, []);

  // const getCarList_ = async () => {
  //   const result: any = await getCarsList();
  //   setCarsList(result?.carlist);
  //   setCarsOrgList(result?.carlist);
  // };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  return (
    <div className="">
      <HomePage />

      {/* <SearchInput /> */}
      {/* <CarsFiltersOption
        carsList={carsOrgList}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsList={carsList} /> */}

      <Toaster />
      <Footer />
    </div>
  );
}
