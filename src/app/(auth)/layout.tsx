import MovingBMW from "@/components/crazyBackgrounds/MovingBMW";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full relative">
      <MovingBMW additionalClasses="grayscale"/>
      {children}
    </div>
  );
};

export default Layout;
