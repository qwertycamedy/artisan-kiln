import { cn } from "@/utils";

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const Panel = ({ title, children, className }: Props) => {
  return (
    <section className={cn("border-2 border-border bg-[#F7F1E7]", className)}>
      {title && (
        <div className="border-b-2 border-border px-4 py-3">
          <h2 className="font-heading text-[28px] uppercase leading-none">
            {title}
          </h2>
        </div>
      )}

      <div className="p-4">{children}</div>
    </section>
  );
};
