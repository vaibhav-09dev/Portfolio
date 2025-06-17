"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const Navbar1 = () => {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Tools",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleSmoothScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems.map((item) => ({
              ...item,
              onClick: (e) => handleSmoothScroll(e, item.link),
            }))}
          />
          <div className="flex items-center gap-4">
                     </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => handleSmoothScroll(e, item.link)}
                className="relative font-bold text-lg text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navbar1;