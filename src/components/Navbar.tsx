import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  const handleScrollTo = (id: string) => {
    router.push(`/#${id}`);
  };

  return (
    <nav className="z-50 bg-white sticky top-0 border-gray-200 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            The Bowery King
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div
                className="cursor-pointer"
                onClick={() => handleScrollTo("search")}
              >
                Search
              </div>
            </li>
            <li>
              <div
                className="cursor-pointer"
                onClick={() => handleScrollTo("latest-blocks")}
              >
                Latest Block
              </div>
            </li>
            <li>
              <div
                className="cursor-pointer"
                onClick={() => handleScrollTo("total-transactions")}
              >
                Total Transactions
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className={classNames(
                  "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                  {
                    "text-blue-700": router.pathname === "/about",
                    "text-gray-900": router.pathname !== "/about",
                  }
                )}
              >
                About
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/toanbku/the-bowery-king"
                className="flex items-center gap-1 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Github
                <ArrowTopRightOnSquareIcon width={16} height={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
