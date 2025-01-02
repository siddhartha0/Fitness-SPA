import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const footerData = {
  companyLink: [
    {
      id: 1,
      title: "About us",
      path: "#",
    },
    {
      id: 2,
      title: "Why us",
      path: "#",
    },
    {
      id: 3,
      title: "Security",
      path: "#",
    },
    {
      id: 4,
      title: "Partnership",
      path: "#",
    },
  ],
  categoryLinks: [
    {
      id: 1,
      title: "Basic Yoga",
      path: "#",
    },
    {
      id: 2,
      title: "Strength Training",
      path: "#",
    },
    {
      id: 3,
      title: "Body Building",
      path: "#",
    },
    {
      id: 4,
      title: "Weight Lost",
      path: "#",
    },
  ],

  helpLinks: [
    {
      id: 1,
      title: "Account",
      path: "#",
    },
    {
      id: 2,
      title: "Support Center",
      path: "#",
    },
    {
      id: 3,
      title: "Privacy Policy",
      path: "#",
    },
    {
      id: 4,
      title: "Terms & Conditions",
      path: "#",
    },
  ],
  contactLinks: [
    {
      id: 1,
      title: "+1 (406) 555-0120",
      icon: "ic:baseline-phone",
    },
    {
      id: 2,
      title: "example@email.com",
      icon: "material-symbols:mail",
    },
    {
      id: 3,
      title: "2464 Royal Ln. Mesa,",
      subTitle: "New Jersey 45463",
      icon: "mdi:location",
    },
  ],
  socialMedias: [
    {
      id: 1,
      path: "#",
      icon: "ic:outline-facebook",
    },
    {
      id: 2,
      path: "#",
      icon: "hugeicons:instagram",
    },
    {
      id: 3,
      path: "#",
      icon: "mdi:twitter",
    },
    {
      id: 4,
      path: "#",
      icon: "entypo-social:linkedin-with-circle",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-fadish-dark text-white px-28 py-20 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="flex flex-col space-y-4">
              {footerData.companyLink.map((company) => (
                <Link
                  href={company.path}
                  className="hover:text-gray-300"
                  key={company.id}
                >
                  {company.title}
                </Link>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Categories</h3>
            <ul className="flex flex-col space-y-4">
              {footerData.categoryLinks.map((category) => (
                <Link
                  href={category.path}
                  className="hover:text-gray-300"
                  key={category.id}
                >
                  {category.title}
                </Link>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Help</h3>
            <ul className="flex flex-col space-y-4">
              {footerData.helpLinks.map((help) => (
                <Link
                  href={help.path}
                  className="hover:text-gray-300"
                  key={help.id}
                >
                  {help.title}
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact US Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact US</h3>
            <ul className="space-y-4">
              {footerData.contactLinks.map((contact) => (
                <li className="flex items-start gap-2">
                  <Icon icon={contact.icon} className="h-5 w-5 text-red mt-1" />
                  <span>
                    {contact.title}
                    <br />

                    {contact.subTitle && contact.subTitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Subscribe Our Newsletter
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black pl-4 pr-12 py-2 rounded-full w-full"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red rounded-full p-1.5">
                  <Icon icon="tabler:location" className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-gray-300">
                Never miss an update & news to your email.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <section
            id="logo"
            className="flex place-items-center gap-4 cursor-pointer"
          >
            <Image src="/logo.png" alt="logo" height={60} width={60} />
            <p className="uppercase font-extrabold  text-xl">Fitnesxia</p>
          </section>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            @2023 DesignAxen. All Copyrights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {footerData.socialMedias.map((social) => (
              <Link
                href={social.path}
                key={social.id}
                className="hover:text-gray-300 text-2xl"
              >
                <Icon icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
