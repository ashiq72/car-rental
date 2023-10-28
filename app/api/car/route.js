import { connectToDB } from "../../../ultis/database";

export const POST = async (request) => {
  const { carName, carPrice, carDesc } = await request.json();

  try {
    await connectToDB();
    const newCar = new CarInfo({ carName, carPrice, carDesc });
    await newCar.save();

    return new Response(JSON.stringify(newCar), { status: 201 });
  } catch (error) {
    return new Response("Failed to create ", { status: 500 });
  }
};
