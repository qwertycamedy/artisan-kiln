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
      <div className="w-full min-w-0">
        <div className="w-full overflow-x-auto border-2 border-border">
          <table className="w-full border-collapse">
            <thead className="bg-[#EFE6D6]">
              <tr className="border-b-2 border-border">
                {[
                  "Collection",
                  "Item",
                  "Quantity",
                  "Unit Price",
                  "Actions",
                ].map((title) => (
                  <th
                    key={title}
                    className="
                border-r-2
                border-border
                px-1
                py-1.5
                text-center
                last:border-r-0
              "
                  >
                    <span className="font-heading text-[9px] uppercase leading-none md:text-[12px]">
                      {title}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item.tile.id}
                  className={
                    index !== items.length - 1 ? "border-b-2 border-border" : ""
                  }
                >
                  {/* tile */}
                  <td className="border-r-2 border-border p-1 align-middle">
                    <div className="flex flex-col items-center gap-1">
                      <div className="relative h-8 w-8 overflow-hidden border-2 border-border bg-white md:h-10 md:w-10">
                        <Image
                          src={item.tile.preview}
                          alt={item.tile.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <span className="max-w-15 text-center font-heading text-[8px] uppercase leading-none md:text-[10px]">
                        {item.tile.name}
                      </span>
                    </div>
                  </td>

                  {/* pattern */}
                  <td className="border-r-2 border-border p-1 align-middle">
                    <div className="relative mx-auto h-10 w-10 overflow-hidden border-2 border-border bg-white md:h-12 md:w-12">
                      <Image
                        src={item.tile.pattern}
                        alt={item.tile.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>

                  {/* quantity */}
                  <td className="border-r-2 border-border p-1 align-middle">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        data-testid={`decrease-${item.tile.id}`}
                        onClick={() => dispatch(decreaseQuantity(item.tile.id))}
                        className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    border-2
                    border-border
                    bg-white
                  "
                      >
                        <Minus size={10} />
                      </button>

                      <span
                        data-testid={`quantity-${item.tile.id}`}
                        className="
                    min-w-5
                    text-center
                    font-heading
                    text-[10px]
                    leading-none
                    md:text-[12px]
                  "
                      >
                        {item.quantity}
                      </span>

                      <button
                        data-testid={`increase-${item.tile.id}`}
                        onClick={() => dispatch(increaseQuantity(item.tile.id))}
                        className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    border-2
                    border-border
                    bg-[#7FA38A]
                  "
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </td>

                  {/* price */}
                  <td className="border-r-2 border-border p-1 align-middle">
                    <div className="flex justify-center">
                      <span className="font-heading text-[10px] uppercase leading-none md:text-[12px]">
                        ${item.tile.price.toFixed(2)}
                      </span>
                    </div>
                  </td>

                  {/* remove */}
                  <td className="p-1 align-middle">
                    <div className="flex justify-center">
                      <button
                        data-testid={`remove-${item.tile.id}`}
                        onClick={() => dispatch(removeItem(item.tile.id))}
                        className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    border-2
                    border-border
                    bg-[#D2875C]
                  "
                      >
                        <Trash2 size={10} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* footer */}
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          {/* add */}
          <button
            onClick={() => setAddTilesModal(true)}
            className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        border-2
        border-border
        bg-[#EFE6D6]
        px-3
        py-2
        shadow-panel
        transition

        sm:w-auto

        hover:translate-x-0.5
        hover:translate-y-0.5
        hover:shadow-none
      "
          >
            <div className="flex h-5 w-5 items-center justify-center border-2 border-border bg-white">
              <Plus size={10} />
            </div>

            <span className="font-heading text-[10px] uppercase leading-none md:text-[12px]">
              Add Tile
            </span>
          </button>

          {/* totals */}
          <div className="w-full max-w-45 space-y-1 self-end">
            <div className="flex items-center justify-between">
              <span className="font-heading text-[10px] uppercase md:text-[12px]">
                Subtotal
              </span>

              <span className="font-heading text-[10px] uppercase md:text-[12px]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-heading text-[10px] uppercase md:text-[12px]">
                Shipping
              </span>

              <span className="font-heading text-[10px] uppercase md:text-[12px]">
                ${shipping.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between border-t-2 border-border pt-1">
              <span className="font-heading text-[12px] uppercase md:text-[14px]">
                Total
              </span>

              <span className="font-heading text-[12px] uppercase md:text-[14px]">
                ${grandTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
