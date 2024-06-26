"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utlis";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 left-0 bg-dark-1 p-6 flex items-center justify-center gap-3 text-white z-40">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            href={link.route}
            key={link.lable}
            className={cn("p-2 md:p-3 rounded-lg", {
              "bg-blue-1": isActive,
            })}
          >
            <p className="text-sm font-semibold ">{link.lable}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
