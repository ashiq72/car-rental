import CarCard from "./CarCard";

export default function CarsList(props: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {props.carsList.map((car: any, index: number) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}
