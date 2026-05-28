import Image from "next/image";
import tile_1 from "@/assets/img/tile_1.jpg";
import tile_2 from "@/assets/img/tile_2.jpg";
import tile_3 from "@/assets/img/tile_3.jpg";

const tiles = [tile_1, tile_2, tile_3];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b-2 border-border bg-cream">
      <div className="absolute left-0 top-0 hidden md:block">
        <div className="h-18 w-18 border-r-2 border-b-2 border-border bg-[#D2875C]" />
      </div>

      <div className="mx-auto flex max-w-360 flex-col items-center px-4 py-6 text-center md:px-6 md:py-8">
        <div className="flex items-center gap-4">
          <div
            className="
          hidden
          h-14
          w-14
          items-center
          justify-center
          border-2
          border-border
          bg-[#E0C067]
          text-2xl
          md:flex
        "
          >
            🏛️
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1
              className="
            max-w-180
            font-heading
            text-[26px]
            uppercase
            leading-none
            tracking-wide
            md:text-[38px]
          "
            >
              Ceramic Tile Order Form
            </h1>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 md:flex">
                {tiles.map((tile, index) => (
                  <div
                    key={index}
                    className="
                  relative
                  h-10
                  w-10
                  overflow-hidden
                  border-2
                  border-border
                  bg-white
                "
                  >
                    <Image src={tile} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>

              <span
                className="
              font-heading
              text-[16px]
              uppercase
              leading-none
              md:text-[24px]
            "
              >
                The Artisan Kiln
              </span>

              <div className="hidden items-center gap-2 md:flex">
                {[...tiles].reverse().map((tile, index) => (
                  <div
                    key={index}
                    className="
                    relative
                    h-10
                    w-10
                    overflow-hidden
                    border-2
                    border-border
                    bg-white
                  "
                  >
                    <Image src={tile} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="
          hidden
          h-14
          w-14
          items-center
          justify-center
          border-2
          border-border
          bg-[#D2875C]
          text-2xl
          md:flex
        "
          >
            🔥
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 hidden md:block">
        <div className="h-18 w-18 border-l-2 border-b-2 border-border bg-[#D2875C]" />
      </div>
    </section>
  );
};
