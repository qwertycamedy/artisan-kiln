"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui";
import { initialTiles } from "@/data/tiles";
import { addTileToCart } from "@/store/features/cart";
import { useAppDispatch } from "@/hooks";

type Props = {
  open: boolean;

  onClose: () => void;
};

export const AddTilesModal = ({ open, onClose }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddTile = (tileId: string) => {
    const tile = initialTiles.find((tile) => tile.id === tileId);

    if (!tile) return;

    dispatch(addTileToCart(tile));

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Add New Tile">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {initialTiles.map((tile) => (
          <motion.button
            key={tile.id}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => handleAddTile(tile.id)}
            className="
              overflow-hidden
              border-2
              border-border
              bg-white
              text-left
              transition
            "
          >
            <div className="relative aspect-square border-b-2 border-border">
              <Image
                src={tile.pattern}
                alt={tile.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3 p-4">
              <div>
                <h3 className="font-heading text-[28px] uppercase leading-none">
                  {tile.name}
                </h3>

                <p className="mt-2 text-sm text-black/70">
                  Handmade ceramic tile collection.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-heading text-[30px] uppercase leading-none">
                  ${tile.price}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border-2
                    border-border
                    bg-[#7FA38A]
                    text-2xl
                  "
                >
                  +
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </Modal>
  );
};
