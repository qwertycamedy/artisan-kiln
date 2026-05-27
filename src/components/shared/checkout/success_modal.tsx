"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;

  onClose: () => void;
};

export const SuccessModal = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-[92%]
              max-w-130
              -translate-x-1/2
              -translate-y-1/2
              border-2
              border-border
              bg-cream
              p-8
              shadow-panel
            "
          >
            <div className="mb-5 flex justify-center">
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-border
                  bg-[#7FA38A]
                  text-4xl
                "
              >
                ✓
              </div>
            </div>

            <h2
              className="
                text-center
                font-heading
                text-[42px]
                uppercase
                leading-none
              "
            >
              Order Placed
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-90
                text-center
                text-sm
                leading-relaxed
              "
            >
              Your ceramic tile order has been successfully submitted. We will
              contact you shortly with shipping details.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="
                  border-2
                  border-border
                  bg-navy
                  px-8
                  py-4
                  font-heading
                  text-[24px]
                  uppercase
                  text-white
                  shadow-panel
                  transition
                  hover:translate-x-0.5
                  hover:translate-y-0.5
                  hover:shadow-none
                "
              >
                Continue
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
