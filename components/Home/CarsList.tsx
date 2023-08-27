import CarCard from "./CarCard";

export default function CarsList(props: any) {
  return (
    <div>
      {props.carsList.map((car: any, index: number) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}
