import Head from "next/head";
import { Navbar } from "./Navbar";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Bowery King</title>
        <meta name="description" content="Explore the blockchain world" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full h-full min-h-screen">
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
    </>
  );
};
