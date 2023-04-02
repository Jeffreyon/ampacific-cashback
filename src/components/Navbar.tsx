import brandLogo from "../../public/brandLogo.svg";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      url: "#",
      label: "About Us",
    },
    {
      url: "#",
      label: "FAQs",
    },
    {
      url: "#",
      label: "Get Help",
    },
  ];
  return (
    <div className="py-6 px-4 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={brandLogo}
              alt="ISTA"
              className="h-12 mr-3 sm:h-14 w-auto"
            />
          </Link>

          <ul className="items-center space-x-8 hidden lg:flex">
            <li>
              <Link
                href="#"
                aria-label="Product"
                title="Product"
                className="font-medium tracking-wide text-slate-500 transition-colors duration-200 hover:text-primary"
              >
                Product
              </Link>
            </li>
            {links.map((item, ii) => {
              return (
                <li key={ii}>
                  <Link
                    href={item.url}
                    aria-label={item.label}
                    title={item.label}
                    className="font-medium tracking-wide text-neutral-500 transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button label="Become a member" />
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 z-10 w-full">
                <div className="p-5 bg-white border rounded shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/" className="flex items-center">
                        <Image
                          src={brandLogo}
                          alt="ISTA"
                          className="h-12 mr-3 sm:h-16 w-auto"
                        />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="#"
                          aria-label="Product"
                          title="Product"
                          className="font-medium tracking-wide text-slate-500 transition-colors duration-200 hover:text-primary"
                        >
                          Product
                        </Link>
                      </li>
                      {links.map((item, ii) => {
                        return (
                          <li key={ii}>
                            <Link
                              href={item.url}
                              aria-label={item.label}
                              title={item.label}
                              className="font-medium tracking-wide text-slate-500 transition-colors duration-200 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}

                      <li>
                        <Button label="Become a member" />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
