"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
      {/* Cart Button */}
      <button
        onClick={() => router.push("/cart")}
        className="relative flex items-center"
      >
        {/* Shopping Bag Icon */}
        <ShoppingBag size={24} color="black" />
        
        {/* Badge */}
        <span className="absolute -top-1 -right-2 text-[12px] font-medium text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
          {cart.items.length}
        </span>
      </button>
    </div>
  );
};

export default NavbarActions;
