"use client";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function addproduct() {
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carDesc, setCarDesc] = useState("");
  // const [carBrand, setCarBrand] = useState("");
  // const [carType, setCarType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("name:", carName);
    console.log("price:", carPrice);
    console.log("Decription:", carDesc);
    try {
      const response = await fetch("/api/car", {
        method: "POST",
        body: JSON.stringify({
          name: carName,
          price: carPrice,
          Decription: carDesc,
        }),
      });

      if (response.ok) {
        alert("done properly");
        setCarName("");
        setCarPrice("");
        setCarDesc("");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Car Name */}
          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Photo */}
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Description  */}
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                value={carDesc}
                onChange={(e) => setCarDesc(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about your car.
            </p>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Audi</option>
                <option>BMW</option>
                <option>Lexus</option>
                <option>Mercedes</option>
                <option>Mini</option>
                <option>Porche</option>
              </select>
            </div>
          </div>
        </div>
        {/* Car type */}
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Car Type
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Auto
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Menual
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      {/* submit button */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
