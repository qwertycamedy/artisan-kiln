"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  control: Control<T>;

  name: Path<T>;

  label: string;

  error?: string;

  placeholder?: string;

  type?: string;
};

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  error,
  placeholder,
  type = "text",
}: Props<T>) => {
  return (
    <div>
      <label className="mb-2 block font-heading text-[14px] uppercase">
        {label}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`
              h-8
              w-full
              border-2
              bg-white
              px-2
              text-xs
              outline-none

              ${error ? "border-[#D2875C]" : "border-border"}
            `}
          />
        )}
      />

      {error && <p className="mt-2 text-sm text-[#D2875C]">{error}</p>}
    </div>
  );
};
