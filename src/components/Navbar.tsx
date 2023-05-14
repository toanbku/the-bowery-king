import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";

export const FNavbar = () => {
  const router = useRouter();

  const handleScrollTo = (id: string) => {
    router.push(`/`, undefined, { scroll: false }).then(() =>
      window.scrollTo({
        top: (document.getElementById(id)?.offsetTop || 0) - 60,
        behavior: "smooth",
      })
    );

    (
      document.querySelector(
        'button[data-testid="flowbite-navbar-toggle"]'
      ) as HTMLElement
    )?.click();
  };

  return (
    <Navbar
      fluid={true}
      rounded={true}
      menuOpen={false}
      className="z-50 bg-white sticky top-0 border-gray-200 shadow md:px-8 md:py-4"
    >
      <Navbar.Brand>
        <Link href="/" className="flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            The Bowery King
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => handleScrollTo("search")}
        >
          Search
        </Navbar.Link>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => handleScrollTo("latest-blocks")}
        >
          Latest Blocks
        </Navbar.Link>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => handleScrollTo("total-transactions")}
        >
          Total Transactions
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link
          className="flex flex-row items-center gap-1"
          target="_blank"
          href="https://github.com/toanbku/the-bowery-king"
        >
          Github
          <ArrowTopRightOnSquareIcon width={16} height={16} />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
