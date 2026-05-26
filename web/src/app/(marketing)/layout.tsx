import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #020817 0%, #0D1B3E 30%, #0A1040 55%, #020817 100%)",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
