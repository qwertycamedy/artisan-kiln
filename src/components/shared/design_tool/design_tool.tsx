"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Panel } from "@/components/ui";
import { placeTile } from "@/store/features/design";
import { useAppDispatch } from "@/hooks";
import { DesignGrid, TilePalette } from "@/components/shared";

export const DesignTool = () => {
  const dispatch = useAppDispatch();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const tileId = String(active.id);

    const [row, col] = String(over.id).split("-").map(Number);

    dispatch(
      placeTile({
        row,
        col,
        tileId,
      }),
    );
  };

  return (
    <Panel>
      <div className="mb-6 text-center">
        <h2 className="font-heading text-[34px] uppercase leading-none">
          Visualize Your Order
        </h2>

        <p className="mt-2 text-sm">Drag tiles into the grid.</p>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid gap-6 xl:grid-cols-[1fr_180px]">
          <DesignGrid />

          <div>
            <h3 className="mb-4 font-heading text-[28px] uppercase leading-none">
              Design Palette
            </h3>

            <TilePalette />
          </div>
        </div>
      </DndContext>
    </Panel>
  );
};
