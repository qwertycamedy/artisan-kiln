import {
  CartPanel,
  CheckoutSidebar,
  DesignTool,
  Header,
  Hero,
  TilesMain,
} from "@/components/shared";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />

      <TilesMain
        left={<CartPanel />}
        center={<DesignTool />}
        right={<CheckoutSidebar />}
      />
    </div>
  );
}
