"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useDroppable } from "@dnd-kit/core";
import { removeTile } from "@/store/features/design";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import { initialTiles } from "@/data/tiles";

type CellProps = {
  row: number;
  col: number;

  tileId: string | null;
};

const GridCell = ({ row, col, tileId }: CellProps) => {
  const dispatch = useAppDispatch();

  const { setNodeRef, isOver } = useDroppable({
    id: `${row}-${col}`,
  });

  const tile = initialTiles.find((tile) => tile.id === tileId);

  return (
    <motion.button
      layout
      whileTap={{
        scale: 0.96,
      }}
      ref={setNodeRef}
      onClick={() => {
        dispatch(removeTile({ row, col }));
      }}
      className={`
        relative
        aspect-square
        border-r-2
        border-b-2
        border-border
        transition

        ${isOver ? "bg-[#D8E7DC]" : "bg-[#F7F1E7]"}
      `}
    >
      {tile && (
        <motion.div
          layout
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.18,
          }}
          className="absolute inset-0"
        >
          <Image
            src={tile.pattern}
            alt={tile.name}
            fill
            className="object-cover"
          />
        </motion.div>
      )}
    </motion.button>
  );
};

export const DesignGrid = () => {
  const cells = useAppSelector((state: RootState) => state.design.cells);

  return (
    <div className="grid grid-cols-6 overflow-hidden border-2 border-border w-full h-max">
      {cells.map((cell) => (
        <GridCell
          key={`${cell.row}-${cell.col}`}
          row={cell.row}
          col={cell.col}
          tileId={cell.tileId}
        />
      ))}
    </div>
  );
};
