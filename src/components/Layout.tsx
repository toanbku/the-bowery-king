import { Navbar } from "./Navbar";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen p-4">
      {/* header */}
      <Navbar />

      {/* container */}
      <main
        className={`md:pt-20 max-w-screen-xl mx-auto flex flex-col gap-10 items-center justify-between `}
      >
        {children}
      </main>

      {/* footer */}
    </div>
  );
};
