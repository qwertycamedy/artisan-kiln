"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useDraggable } from "@dnd-kit/core";
import { Check } from "lucide-react";
import { selectTile } from "@/store/features/design";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import { initialTiles } from "@/data/tiles";

type TileCardProps = {
  id: string;
  image: StaticImageData;
  name: string;
  selected: boolean;

  onClick: () => void;
};

const TileCard = ({ id, image, name, selected, onClick }: TileCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <motion.button
      layout
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.96,
      }}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`
        relative
        aspect-square
        overflow-hidden
        border-2
        border-border

        ${selected ? "bg-[#D8E7DC]" : "bg-white"}
      `}
    >
      <Image src={image} alt={name} fill className="object-cover" />

      {selected && (
        <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-[#7FA38A]">
          <Check size={16} />
        </div>
      )}
    </motion.button>
  );
};

export const TilePalette = () => {
  const dispatch = useAppDispatch();

  const selectedTileId = useAppSelector(
    (state: RootState) => state.design.selectedTileId,
  );

  return (
    <div className="grid grid-cols-2 gap-3">
      {initialTiles.map((tile) => (
        <TileCard
          key={tile.id}
          id={tile.id}
          image={tile.pattern}
          name={tile.name}
          selected={selectedTileId === tile.id}
          onClick={() => dispatch(selectTile(tile.id))}
        />
      ))}
    </div>
  );
};
