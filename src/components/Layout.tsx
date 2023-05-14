import Head from "next/head";
import { FNavbar } from "./Navbar";
import Link from "next/link";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Bowery King</title>
        <meta name="description" content="Explore the blockchain world" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full h-full min-h-[calc(100vh-80px)]">
        {/* header */}
        <FNavbar />

        {/* container */}
        <main
          className={`max-w-screen-xl mx-auto flex flex-col gap-10 items-center justify-between `}
        >
          {children}
        </main>
      </div>
      {/* footer */}
      <footer
        className={`md:pt-10 max-w-screen-xl mx-auto flex items-center justify-center py-4`}
      >
        © {new Date().getUTCFullYear()}{" "}
        <Link
          className="ml-1 text-blue-400"
          href="https://getnimbus.io/"
          target="_blank"
        >
          Nimbus, Inc
        </Link>
        . All rights reserved.
      </footer>
    </>
  );
};
