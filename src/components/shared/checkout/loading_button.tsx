"use client";

import { Loader2 } from "lucide-react";

type Props = {
  loading?: boolean;

  children: React.ReactNode;

  type?: "button" | "submit";

  onClick?: () => void;

  className?: string;
};

export const LoadingButton = ({
  loading,
  children,
  type = "button",
  onClick,
  className,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        flex
        w-full
        items-center
        justify-center
        gap-3
        border-2
        border-border
        bg-navy
        py-4
        font-heading
        text-[30px]
        uppercase
        text-white
        shadow-panel
        transition

        disabled:cursor-not-allowed
        disabled:opacity-70

        hover:translate-x-0.5
        hover:translate-y-0.5
        hover:shadow-none

        ${className}
      `}
    >
      {loading && <Loader2 size={26} className="animate-spin" />}

      {children}
    </button>
  );
};
