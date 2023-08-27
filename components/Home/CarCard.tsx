import { useState } from "react";

export default function CarCard(props: any) {
  const [car, setCar] = useState(props.car);
  return (
    <div>
      <h1 className="text-[20px] font-medium mb-2">{car.name}</h1>
    </div>
  );
}
