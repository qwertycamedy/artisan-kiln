"use client";

import {
  DndContext,
  DragEndEvent,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Panel } from "@/components/ui";
import { placeTile } from "@/store/features/design";
import { useAppDispatch } from "@/hooks";
import { DesignGrid, TilePalette } from "@/components/shared";
import { useId } from "react";

export const DesignTool = () => {
  const dispatch = useAppDispatch();
  const dndId = useId();
  const sensors = useSensors(
    useSensor(MouseSensor),

    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 120,
        tolerance: 8,
      },
    }),
  );

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
    <Panel className="min-w-[35%]">
      <div className="mb-6 text-center">
        <h2 className="font-heading text-[24px] uppercase leading-none">
          Visualize Your Order
        </h2>

        <p className="mt-2 text-sm">Drag tiles into the grid.</p>
      </div>

      <DndContext id={dndId} sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row gap-6">
          <DesignGrid />

          <div>
            <h3 className="mb-4 font-heading text-[20px] uppercase leading-none">
              Design Palette
            </h3>

            <TilePalette />
          </div>
        </div>
      </DndContext>
    </Panel>
  );
};
