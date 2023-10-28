"use client";
import Link from "next/link";
import { useRouter } from "next/compat/router";

export default function DashboardLayout() {
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path ? "text-green-400" : "text-red-400";
  };
  console.log(router.pathname);
  return (
    <div className="overflow-x-auto border-r border-gray-200 py-6 pr-12">
      <nav className="flex flex-col">
        <ul className="flex flex-1 flex-col gap-y-4" role="list">
          <li>
            <Link
              href="/addproduct"
              className={`${
                router.pathname == "/addproduct"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              Add A Product
            </Link>
          </li>
          <li>
            <Link
              className={`${isActive("/productlists")}`}
              href="/productlists"
            >
              Productlists
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
