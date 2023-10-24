import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import CarCardSkelton from "./CarCardSkelton";
import BookingModal from "../CarBooking/BookingModal";

export default function CarsList(props: any) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>([]);
  useEffect(() => {
    if (props.carsList) {
      setIsLoaded(false);
    }
  }, [props.carsList]);

  return (
    <div className="p-5 px-10 md:px-20 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {props.carsList.map((car: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              (window as any).my_modal_4.showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
        {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkelton />) : null}

        {/* You can open the modal using ID.showModal() method */}

        <BookingModal car={selectedCar} />
      </div>
    </div>
  );
}
