import Image from "next/image";

const Category = () => {
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <div className="text-center pt-16">
        <h1 className="font-bold text-4xl">
          First Class Car Rental & Limousine Services
        </h1>
        <p className="text-base">
          We offer professional car rental & limousine services in our range of
          high-end vehicles
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-3 justify-items-center">
          <div className="w-[400px] h-[300px]">
            <Image src="/audi.jpg" alt="" width={400} height={200} />
          </div>
          <div className="w-[400px] h-[300px]">
            <Image src="/bmw.jpg" alt="" width={400} height={200} />
          </div>
          <div>
            <Image src="/lexus.jpg" alt="" width={400} height={200} />
          </div>
          <div>
            <Image src="/mercedes.jpg" alt="" width={400} height={200} />
          </div>
          <div>
            <Image src="/mini.jpg" alt="" width={400} height={200} />
          </div>
          <div>
            <Image src="/porsche.jpg" alt="" width={400} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
