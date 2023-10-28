"use client";
import DashboardLayout from "@/components/Shared/DashboardLayout/DashboardLayout";
import HeaderComon from "@/components/Shared/Header/HeaderComon";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const layout = ({ children }) => {
  const pathname = usePathname();
  // const isActive = (path) => {
  //   return pathname === path ? "text-green-400" : "text-red-400";
  // };
  console.log(pathname);
  return (
    <section className="py-6">
      <HeaderComon />
      <div className="container flex pt-10">
        <div className="overflow-x-auto border-r border-gray-200">
          <nav className="flex flex-col mx-4">
            <ul className="flex flex-1 flex-col gap-y-4 w-40" role="list">
              <Link
                href="/addproduct"
                className={`${
                  pathname == "/addproduct"
                    ? "bg-slate-200 rounded py-4 duration-300"
                    : "py-4"
                }`}
              >
                <span className="px-4 ">Add A Product</span>
              </Link>
              <Link
                href="/productlists"
                className={`${
                  pathname == "/productlists"
                    ? " bg-slate-200 rounded py-4 duration-300"
                    : "py-4"
                }`}
              >
                <span className="px-4">Productlists</span>
              </Link>
            </ul>
          </nav>
        </div>
        <main className="grow ml-6 p-6 bg-gray-50">{children}</main>
      </div>
    </section>
  );
};
export default layout;
