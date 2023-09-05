"use client";
import CarsList from "@/components/Home/CarsList";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  // console.log(carsList);
  // console.log(carsOrgList);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carlist);
    setCarsOrgList(result?.carlist);
  };

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
      <Hero />
      <SearchInput />
      <CarsFiltersOption
        carsList={carsOrgList}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsList={carsList} />
      <Toaster />
    </div>
  );
}
