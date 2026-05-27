"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;

  onClose: () => void;

  title?: string;

  children: React.ReactNode;
};

export const Modal = ({ open, onClose, title, children }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/40
              backdrop-blur-[2px]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[92%]
              max-w-180
              -translate-x-1/2
              -translate-y-1/2
              border-2
              border-border
              bg-cream
              shadow-panel
            "
          >
            <div className="flex items-center justify-between border-b-2 border-border px-6 py-4">
              <h2 className="font-heading text-[34px] uppercase leading-none">
                {title}
              </h2>

              <button
                onClick={onClose}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border-2
                  border-border
                  bg-white
                  text-2xl
                "
              >
                ×
              </button>
            </div>

            <div className="p-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
