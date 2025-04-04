import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="flex items-center header-button">
          <span className="font-bold">Hello, Sign In</span>
        </Link>
        <Link href="/cart" className="header-button flex items-center">
          <ShoppingCart className="h-8 w-8" />
          <span className="font-bold"> Cart</span>
        </Link>
      </nav>
    </div>
  );
}
