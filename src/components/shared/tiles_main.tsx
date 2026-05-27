type Props = {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
};

export const TilesMain = ({ left, center, right }: Props) => {
  return (
    <section className="mx-auto w-full max-w-360 px-4 py-6 md:px-8 md:py-8">
      {/* mobile */}
      <div className="flex flex-col gap-6 xl:hidden">
        {left}
        {center}
        {right}
      </div>

      {/* desktop */}
      <div className="hidden grid-cols-[380px_1fr_320px] gap-6 xl:grid">
        {left}
        {center}
        {right}
      </div>
    </section>
  );
};
