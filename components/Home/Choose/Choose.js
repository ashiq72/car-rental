import { AiFillCar, AiOutlineHeart } from "react-icons/ai";
import { RiEmotionHappyLine } from "react-icons/ri";
const Choose = () => {
  const chooseItems = [
    {
      icon: <AiFillCar />,
      title: "Variety of Car Brands",
      decs: " Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      icon: <RiEmotionHappyLine />,
      title: "Best Rate Guarantee",
      decs: " Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      icon: <AiOutlineHeart />,
      title: "Awesome Customer Support",
      decs: " Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];
  return (
    <div className="p-5 px-10 md:px-20  py-24">
      <div className="text-center pb-16">
        <h1 className="font-bold lg:text-4xl text-2xl">Why Choose Us</h1>
        <p className="text-base">
          Explore our first class limousine & car rental services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-8 ">
        {chooseItems.map((item, index) => (
          <div
            className="flex flex-col items-center hover:-translate-y-1 duration-300 w-80"
            key={index}
          >
            <span className="text-6xl">{item.icon}</span>
            <h1 className="text-yellow-500 text-2xl font-bold">
              Variety of Car Brands
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        ))}
        {/* <div className="flex flex-col items-center">
          <span className="text-6xl">
            <AiFillCar />
          </span>
          <h1 className="text-yellow-500 text-2xl font-bold">
            Variety of Car Brands
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
            ligula eget dolor.
          </p>
        </div>
        <div>
          <span>
            <AiFillCar />
          </span>
          <h1>Best Rate Guarantee</h1>
          <p>
            Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
            ligula eget dolor.
          </p>
        </div>
        <div>
          <span>
            <AiFillCar />
          </span>
          <h1>Awesome Customer Support</h1>
          <p>
            Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
            ligula eget dolor.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Choose;
