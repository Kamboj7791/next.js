"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./style.css";
const links = [
  {
    name: "login",
    href: "/login",
  },
  {
    name: "register",
    href: "/register",
  },
  {
    name: "forget-password",
    href: "/forget-password",
  },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
