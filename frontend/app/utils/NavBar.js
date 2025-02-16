"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" onClick={() => router.push("/")}>perfEvals</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a
                            onClick={() => router.push("/dashboard")}
                            className={`cursor-pointer ${pathname === "/dashboard" ? "bg-gray-200 text-black font-semibold rounded-md" : ""}`}
                        >
                            Evaluations
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => router.push("/employees")}
                            className={`cursor-pointer ${pathname === "/employees" ? "bg-gray-200 text-black font-semibold rounded-md" : ""}`}
                        >
                            Employees
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
