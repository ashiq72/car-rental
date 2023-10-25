import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  const categoryItems = [
    {
      name: "Audi",
      image: "/audi.jpg",
    },
    {
      name: "BMW",
      image: "/bmw.jpg",
    },
    {
      name: "Lexus",
      image: "/lexus.jpg",
    },
    {
      name: "Mercedes",
      image: "/mercedes.jpg",
    },
    {
      name: "MINI",
      image: "/mini.jpg",
    },
    {
      name: "Porsche",
      image: "/porsche.jpg",
    },
  ];
  return (
    <div className="p-5 px-10 md:px-20">
      <div className="text-center py-16">
        <h1 className="font-bold lg:text-4xl text-2xl">
          First Class Car Rental & Limousine Services
        </h1>
        <p className="text-base">
          We offer professional car rental & limousine services in our range of
          high-end vehicles
        </p>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center group gap-10 max-w-7xl mx-auto">
          {categoryItems.map((item, index) => (
            <Link
              href="/category"
              className="flex items-center justify-center overflow-hidden group rounded relative
              gradient-overlay hover:-translate-y-1 hover:shadow-2xl
              duration-300
             "
              key={index}
            >
              <Image
                src={item.image}
                alt=""
                width={400}
                height={500}
                className="w-full h-full"
              />
              <h1 className="absolute z-20 text-white bottom-3 left-5 ">
                <span className="text-2xl font-semibold">{item.name}</span>
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
