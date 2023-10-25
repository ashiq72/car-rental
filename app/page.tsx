"use client";
import CarsList from "@/components/Home/CarsList";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import CategoryList from "@/components/Home/CategoryList/CategoryList";
import Choose from "@/components/Home/Choose/Choose";
import Footer from "@/components//Shared/Footer/Footer";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

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
      <CategoryList />
      <SearchInput />
      <CarsFiltersOption
        carsList={carsOrgList}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsList={carsList} />
      <Choose />
      <Toaster />
      <Footer />
    </div>
  );
}
