"use client";

import { Modal } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;

  onClose: () => void;
};

export const SuccessModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose} title="Order Placed">
      <div className="mb-5 flex justify-center">
        <div
          className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-border
                  bg-[#7FA38A]
                  text-3xl
                "
        >
          ✓
        </div>
      </div>

      <h2
        className="
                text-center
                font-heading
                text-[24px]
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
                text-xs
                leading-relaxed
              "
      >
        Your ceramic tile order has been successfully submitted. We will contact
        you shortly with shipping details.
      </p>

      <div className="mt-8 flex justify-center">
        <button
          onClick={onClose}
          className="
                  border-2
                  border-border
                  bg-navy
                  px-4
                  py-2
                  font-heading
                  text-[16px]
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
    </Modal>
  );
};
