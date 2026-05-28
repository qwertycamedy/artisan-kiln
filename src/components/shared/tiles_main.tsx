type Props = {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
};

export const TilesMain = ({ left, center, right }: Props) => {
  return (
    <section className="mx-auto w-full px-6 py-6 flex justify-center">
      <div className="flex flex-col xl:flex-row xl:items-start gap-6">
        {left}
        {center}
        {right}
      </div>
    </section>
  );
};
