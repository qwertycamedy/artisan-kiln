"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/store/features/cart";
import {
  selectCartItems,
  selectGrandTotal,
  selectShipping,
  selectSubtotal,
} from "@/store/selectors/cart";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { AddTilesModal } from "@/components/shared";

export const CartTable = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectSubtotal);
  const shipping = useAppSelector(selectShipping);
  const grandTotal = useAppSelector(selectGrandTotal);

  const [addTilesModal, setAddTilesModal] = useState(false);

  return (
    <>
      <AddTilesModal
        open={addTilesModal}
        onClose={() => setAddTilesModal(false)}
      />

      <div>
        <div className="overflow-hidden border-2 border-border">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_90px] border-b-2 border-border bg-[#EFE6D6]">
            {[
              "Tile Collection",
              "Item",
              "Quantity",
              "Unit Price",
              "Actions",
            ].map((title) => (
              <div
                key={title}
                className="border-r-2 border-border px-3 py-4 text-center last:border-r-0"
              >
                <span className="font-heading text-[22px] uppercase leading-none">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {items.map((item, index) => (
            <div
              key={item.tile.id}
              className={`
              grid grid-cols-[1.4fr_1fr_1fr_1fr_90px]
              ${index !== items.length - 1 ? "border-b-2 border-border" : ""}
            `}
            >
              <div className="border-r-2 border-border p-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-20 w-20 overflow-hidden border-2 border-border bg-white">
                    <Image
                      src={item.tile.preview}
                      alt={item.tile.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="font-heading text-[24px] uppercase leading-none text-center">
                    {item.tile.name}
                  </span>
                </div>
              </div>

              <div className="border-r-2 border-border p-3">
                <div className="relative mx-auto h-24 w-24 overflow-hidden border-2 border-border bg-white">
                  <Image
                    src={item.tile.pattern}
                    alt={item.tile.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="border-r-2 border-border p-3">
                <div className="flex h-full items-center justify-center gap-3">
                  <button
                    data-testid={`decrease-${item.tile.id}`}
                    onClick={() => dispatch(decreaseQuantity(item.tile.id))}
                    className="flex h-9 w-9 items-center justify-center border-2 border-border bg-white"
                  >
                    <Minus size={18} />
                  </button>

                  <span
                    data-testid={`quantity-${item.tile.id}`}
                    className="min-w-13 text-center font-heading text-[30px] leading-none"
                  >
                    {item.quantity}
                  </span>

                  <button
                    data-testid={`increase-${item.tile.id}`}
                    onClick={() => dispatch(increaseQuantity(item.tile.id))}
                    className="flex h-9 w-9 items-center justify-center border-2 border-border bg-[#7FA38A]"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="border-r-2 border-border p-3">
                <div className="flex h-full items-center justify-center">
                  <span className="font-heading text-[30px] uppercase leading-none">
                    ${item.tile.price.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="p-3">
                <div className="flex h-full items-center justify-center">
                  <button
                    data-testid={`remove-${item.tile.id}`}
                    onClick={() => dispatch(removeItem(item.tile.id))}
                    className="flex h-12 w-12 items-center justify-center border-2 border-border bg-[#D2875C]"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <button
            onClick={() => setAddTilesModal(true)}
            className="
            flex
            items-center
            gap-4
            border-2
            border-border
            bg-[#EFE6D6]
            px-5
            py-4
            shadow-panel
          "
          >
            <div className="flex h-10 w-10 items-center justify-center border-2 border-border bg-white">
              <Plus />
            </div>

            <span className="font-heading text-[26px] uppercase leading-none">
              Add New Tile
            </span>
          </button>

          <div className="min-w-60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-heading text-[28px] uppercase">
                Subtotal
              </span>

              <span className="font-heading text-[28px] uppercase">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-heading text-[28px] uppercase">
                Shipping
              </span>

              <span className="font-heading text-[28px] uppercase">
                ${shipping.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between border-t-2 border-border pt-3">
              <span className="font-heading text-[34px] uppercase">Total</span>

              <span className="font-heading text-[34px] uppercase">
                ${grandTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
