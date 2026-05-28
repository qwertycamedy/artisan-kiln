"use client";

import { useEffect } from "react";
import { Panel } from "@/components/ui";
import { CartTable } from "@/components/shared";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import { clearCartHighlight } from "@/store/features/cart";
import { cn } from "@/utils";

export const CartPanel = () => {
  const dispatch = useAppDispatch();
  const highlighted = useAppSelector(
    (state: RootState) => state.cart.cartHighlighted,
  );

  useEffect(() => {
    if (!highlighted) return;

    const timeout = setTimeout(() => {
      dispatch(clearCartHighlight());
    }, 1800);

    return () => clearTimeout(timeout);
  }, [highlighted, dispatch]);

  return (
    <Panel
      className={cn("transition-all duration-300", {
        "bg-[#a6d09b] scale-[1.01]": highlighted,
      })}
      title="Shopping Cart & Design Tool"
    >
      <CartTable />
    </Panel>
  );
};
