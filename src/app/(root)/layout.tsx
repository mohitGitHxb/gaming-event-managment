import MovingBMW from "@/components/crazyBackgrounds/MovingBMW";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <MovingBMW additionalClasses="saturate-150"/>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
