import Image from "next/image";
import tile_1 from "@/assets/img/tile_1.jpg";
import tile_2 from "@/assets/img/tile_2.jpg";
import tile_3 from "@/assets/img/tile_3.jpg";

const tiles = [tile_1, tile_2, tile_3];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b-2 border-border bg-cream">
      <div className="absolute left-0 top-0 hidden md:block">
        <div className="h-28 w-28 border-2 border-border bg-[#D2875C]" />
      </div>

      <div className="mx-auto flex max-w-360 flex-col items-center px-4 py-10 text-center md:px-8 md:py-14">
        <div className="mb-6 hidden items-center gap-6 md:flex">
          <div className="flex h-20 w-20 items-center justify-center border-2 border-border bg-[#E0C067] text-4xl">
            🏛️
          </div>

          <div className="flex flex-col gap-1 items-center text-center">
            <h1 className="max-w-275 font-heading text-[40px] uppercase leading-none tracking-wide md:text-[53px]">
              Ceramic Tile Order Form
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3">
                {tiles.map((tile, index) => (
                  <div
                    key={index}
                    className="relative h-14 w-14 overflow-hidden border-2 border-border bg-white"
                  >
                    <Image src={tile} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>

              <span className="font-heading text-[20px] uppercase leading-none md:text-[35px]">
                The Artisan Kiln
              </span>

              <div className="flex items-center gap-3">
                {tiles.reverse().map((tile, index) => (
                  <div
                    key={index}
                    className="relative h-12 w-12 overflow-hidden border-2 border-border bg-white md:h-14 md:w-14"
                  >
                    <Image src={tile} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden h-20 w-20 items-center justify-center border-2 border-border bg-[#D2875C] text-4xl md:flex">
            🔥
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 hidden md:block">
        <div className="h-28 w-28 border-2 border-border bg-[#D2875C]" />
      </div>
    </section>
  );
};
