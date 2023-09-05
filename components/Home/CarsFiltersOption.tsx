import { useEffect, useState } from "react";

export default function CarsFiltersOption({
  carsList,
  setBrand,
  orderCarList,
}: any) {
  const [brandList, setBrandList] = useState<any>();

  const BrandSet = new Set(); // Akhane uniqe brand name pawoa jabe

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });

    // console.log(BrandSet);
    // console.log(brandList);

    setBrandList(Array.from(BrandSet));
  };
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <div className="mt-10 flex items-center justify-between">
        <div>
          <h2 className="text-[30px] font-bold">Cars Catalog</h2>
          <h2>Explore our cars you might likes</h2>
        </div>
        <div className="flex gap-5">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => orderCarList(e.target.value)}
          >
            <option disabled selected>
              Price
            </option>
            <option value={-1}>Min to Max</option>
            <option value={1}>Max to Min</option>
          </select>
          <select
            className="select select-bordered w-full md:block max-w-xs hidden"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option disabled selected>
              All Brands
            </option>
            {brandList &&
              brandList.map((item: string, index: number) => (
                <option key={index}>{item}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
