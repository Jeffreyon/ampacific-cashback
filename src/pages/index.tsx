import Head from "next/head";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import landscapeImage from "../../public/landscape-shot.png";
import manInSuitImage from "../../public/man-in-suit.png";
import icons from "@/lib/icons";
import Link from "next/link";

import realEstateImage from "../../public/investment images/real-estate.png";
import agricultureImage from "../../public/investment images/agriculture.png";
import digitalImage from "../../public/investment images/digital.png";

import brandLogoLight from "../../public/brandLogoLight.svg";
import phoneIcon from "../../public/icons/phone-icon.svg";
import mailIcon from "../../public/icons/mail.svg";
import instagramLogo from "../../public/social icons/instagram.png";
import facebookLogo from "../../public/social icons/facebook.svg";
import whatsappLogo from "../../public/social icons/whatsapp.png";

const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Amapacific Cashback</title>
        <meta
          name="description"
          content="Build your Investment portfolio and Earn up to 20% cashback on Investment in 30days"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main
        className={`${montserrat.className} ${poppins.variable} bg-primary-50`}
      >
        <Navbar />
        <div className="px-4">
          <div className=" max-w-6xl mx-auto">
            <div className=" text-center py-20">
              <h1 className=" text-2xl md:text-6xl font-semibold font-poppins text-primary">
                Welcome to Ampacific Cashback
              </h1>
              <p className=" my-10 text-neutral-500 max-w-xl mx-auto">
                Build your Investment portfolio and Earn up to 20% cashback on
                Investment in 30days
              </p>
              <Button label="Become a member" className="" />
            </div>
            <section className=" py-10 md:py-20 flex flex-col-reverse lg:flex-row gap-4 lg:gap-16">
              <div className=" py-8 md:max-w-lg md:py-16">
                <h2 className=" text-2xl lg:text-3xl font-semibold font-poppins text-primary text-center lg:text-left">
                  More than just Investment
                </h2>
                <p className=" my-5 text-neutral-500 text-center lg:text-left">
                  Cashback help with cash flow and allow you to invest the right
                  amount at the right time by receiving some of their initial
                  investment back in cash and meeting your goals over a
                  specified duration
                </p>
                <div className="flex flex-col gap-8 mt-12">
                  {[
                    {
                      title: "Invest & Re-Invest",
                      body: `Cashback provide liquidity to investors by allowing
                      them to use the money they receive to re-invest in
                      some other properties or to cover expenses related to
                      their investment`,
                      icon: icons.reinvestIcon,
                    },
                    {
                      title: "Returns on Investment",
                      body: `Cashback increase the return on investment (ROI) for investors. The profit is pegged at 20% in 30 days`,
                      icon: icons.returnsIcon,
                    },
                    {
                      title: "Security on Investment",
                      body: `Investing with us means that the capital invested is protected.we have security strategies that can help protect the investment portfolio from potential losses.`,
                      icon: icons.securityIcon,
                    },
                  ].map((item, ii) => (
                    <div className="flex flex-col sm:flex-row gap-4" key={ii}>
                      <div>
                        <div className=" p-3 rounded-md flex items-center justify-center border-2 border-secondary w-12 h-12 lg:w-16 lg:h-16">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            className=" w-20 lg:max-w-[30px]"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className=" text-lg lg:text-2xl font-semibold text-neutral-800">
                          {item.title}
                        </h3>
                        <p className=" text-neutral-500 mt-2">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  alt=""
                  src={landscapeImage}
                  className=" w-full h-72 lg:h-full object-cover rounded-xl md:rounded-3xl shadow md:shadow-xl"
                />
              </div>
            </section>
            <section className=" py-10 md:py-20 flex flex-col-reverse lg:flex-row-reverse gap-4 lg:gap-16">
              <div className=" py-8 sm:max-w-lg sm:py-16">
                <h2 className=" text-2xl lg:text-3xl font-semibold font-poppins text-primary text-center lg:text-left">
                  Get Multiple interest with Investment
                </h2>
                <p className=" my-5 text-neutral-500 text-center lg:text-left">
                  Build your investment portfolio with ease with our Diversified
                  and well secured Investment options
                </p>
                <div className="flex flex-col gap-6 mt-12">
                  {[
                    {
                      title: "Meeting Financial Goals",
                      body: `Cashback Investment returns help you achieve long-term financial goals such as saving for retirement, paying for your children's education, or buying or reinvesting on other properties.`,
                      icon: icons.financialGoalsIcon,
                    },
                    {
                      title: "Building Wealth",
                      body: `You can potentially earn a return on your investment with cashback and increase your net worth by putting your money into assets that have the potential to appreciate in value.`,
                      icon: icons.buildingWealthIcon,
                    },
                    {
                      title: "Expand Investment portfolio",
                      body: ` You can expand your portfolio and increase cashflow by using the profits from one investment cashback to rollover investment or invest in another properties.`,
                      icon: icons.investmentIcon,
                    },
                  ].map((item, ii) => (
                    <div className="flex flex-col sm:flex-row gap-4" key={ii}>
                      <div>
                        <div className=" p-3 rounded-md flex items-center justify-center border-2 border-secondary w-12 h-12 lg:w-16 lg:h-16">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            className=" w-20 lg:max-w-[30px]"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className=" text-lg lg:text-2xl font-semibold text-neutral-800">
                          {item.title}
                        </h3>
                        <p className=" text-neutral-500 mt-2">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  alt=""
                  src={manInSuitImage}
                  className=" w-full h-72 lg:h-full object-cover rounded-xl md:rounded-3xl shadow md:shadow-xl"
                />
              </div>
            </section>
            <section className=" text-center py-10 md:py-20">
              <h2 className=" text-2xl lg:text-3xl font-semibold font-poppins text-primary text-center ">
                Investments We Offer
              </h2>
              <p className=" my-8 text-neutral-500 max-w-xl mx-auto">
                Browse our curated selection of Investment opportunities across
                the country with hig-return potential and low risk
              </p>
              <div className="grid grid-col-1 md:grid-cols-3 gap-8 my-8 md:my-16">
                {[
                  {
                    title: "Real Estate",
                    image: realEstateImage,
                  },
                  {
                    title: "Agriculture",
                    image: agricultureImage,
                  },
                  {
                    title: "Digital",
                    image: digitalImage,
                  },
                ].map((item, ii) => (
                  <div key={ii}>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className=" h-full object-cover rounded-xl md:rounded-3xl shadow md:shadow-xl"
                      />
                    </div>
                    <h3 className=" text-neutral-600 font-semibold text-xl mt-4">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
              <Button label="Become a member" />
            </section>
            <section className="py-10 md:py-20">
              <h2 className=" text-2xl lg:text-3xl font-semibold font-poppins text-primary text-center ">
                Why Chooose Us
              </h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                {[
                  {
                    title: "Online Process",
                    body: `No need to visit offices, Obtain Documents  or negotiate deals, we conclude all transactions online`,
                    icon: icons.onlineProcessIcon,
                  },
                  {
                    title: "Low Minimum Investment",
                    body: `You can invest in our investment plans with a minimum of  50,000 NGN`,
                    icon: icons.minInvestmentIcon,
                  },
                  {
                    title: "Get Good Retuns",
                    body: `We find high profitable properties that has the highest potential income for increase in investment and cashback`,
                    icon: icons.getGoogReturnsIcon,
                  },
                  {
                    title: "Easy to use Platform",
                    body: `Our platform is easy to use, you can track your past investments payments through your dashboard and also explore new investment opportunities on our platform`,
                    icon: icons.easyToUseIcon,
                  },
                ].map((item, ii) => (
                  <div
                    key={ii}
                    className=" bg-white shadow-md p-8 border border-neutral-100 rounded-md"
                  >
                    <div className="flex gap-4">
                      <Image src={item.icon} alt={item.title} />
                      <h3 className=" text-secondary-800 font-semibold text-xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-neutral-500">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className=" flex justify-center">
                <Button label="Become a member" />
              </div>
            </section>
            <section className="py-10 md:py-20">
              <h2 className=" text-2xl lg:text-3xl font-semibold font-poppins text-primary text-center ">
                How it works
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8 md:my-16">
                {[
                  {
                    title: "Create An Account",
                    body: `Register and provide your personal details`,
                    icon: icons.createAccountIcon,
                  },
                  {
                    title: "Invest in a Property",
                    body: `Make payment by linking your bank account and complete the investment process`,
                    icon: icons.investInPropertyIcon,
                  },
                  {
                    title: "Receive Your investment Income",
                    body: `Receive your investment income after 30 days`,
                    icon: icons.receiveInvestmentIcon,
                  },
                  {
                    title: "Roll-over or  Reinvest",
                    body: `Roll over your existing investment or re invest in other investment opportunities`,
                    icon: icons.rollOverIcon,
                  },
                ].map((item, ii) => (
                  <div
                    key={ii}
                    className=" bg-white shadow-md p-8 border border-neutral-100 rounded-md text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className=" w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                        <Image src={item.icon} alt={item.title} />
                      </div>
                      <h3 className=" text-neutral-800 font-semibold text-xl mt-4">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-neutral-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="py-10 md:py-20">
              <div className="py-20 px-4 blob-svg drop-shadow-xl bg-secondary lg:bg-transparent rounded-2xl lg:rounded-none">
                <h2 className=" text-2xl lg:text-3xl font-semibold font-poppins text-white text-center ">
                  Ready to invest?
                </h2>
                <div className=" flex justify-center mt-6">
                  <Button
                    label="View current opportunities"
                    className="bg-transparent border border-white hover:bg-white hover:text-secondary w-auto"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer className=" px-4 mt-12 bg-primary-900 text-white">
          <div className=" max-w-6xl mx-auto">
            <div className=" py-16 flex flex-col-reverse lg:flex-row justify-between gap-12">
              <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16">
                <div className=" flex flex-col gap-4">
                  <h3 className="text-xl font-semibold mb-3">Get help</h3>
                  <Link
                    href="tel:619-393-4981"
                    className=" flex gap-3 hover:text-secondary transition-colors"
                  >
                    <span>
                      <Image src={phoneIcon} alt="" className=" w-5" />
                    </span>
                    619-393-4981 ext. 101
                  </Link>
                  <Link
                    href="tel:619-393-4981"
                    className=" flex gap-3 hover:text-secondary transition-colors"
                  >
                    <span>
                      <Image src={mailIcon} alt="" className=" w-5" />
                    </span>
                    invest@ampacific.com
                  </Link>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className=" w-10 h-10 rounded-md flex items-center justify-center bg-white"
                    >
                      <Image src={instagramLogo} alt="" className=" w-6" />
                    </Link>
                    <Link
                      href="#"
                      className=" w-10 h-10 rounded-md flex items-center justify-center bg-white"
                    >
                      <Image src={facebookLogo} alt="" className=" w-6" />
                    </Link>
                    <Link
                      href="#"
                      className=" w-10 h-10 rounded-md flex items-center justify-center bg-white"
                    >
                      <Image src={whatsappLogo} alt="" className=" w-6" />
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-7">Links</h3>
                  <ul className="flex flex-col gap-4">
                    {[
                      {
                        url: "/",
                        label: "About us",
                      },
                      {
                        url: "/",
                        label: "Careers",
                      },
                      {
                        url: "/",
                        label: "Terms & Conditions",
                      },
                      {
                        url: "/",
                        label: "Privacy Policy",
                      },
                    ].map((link, ii) => (
                      <li key={ii}>
                        <Link
                          href={link.url}
                          className="transition-colors duration-200 hover:text-secondary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={brandLogoLight}
                    alt=""
                    className="h-16 mr-3 sm:h-20 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className=" py-10 text-center border-t border-slate-800 text-sm text-slate-400">
              Ampacific Cashback 2023 @ All Right Reserved
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
