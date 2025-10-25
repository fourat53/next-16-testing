"use client";

import {
  Navbar as DefaultNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Test",
    link: "/test",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <DefaultNavbar className="bg-sidebar rounded-full w-[90%] max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            {/* <NavbarButton variant="primary">Login</NavbarButton> */}
            <LoginLink>Sign in</LoginLink>
            <RegisterLink>Sign up</RegisterLink>
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
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <ThemeSwitch labeled />
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <LoginLink>Sign in</LoginLink>
              <RegisterLink>Sign up</RegisterLink>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </DefaultNavbar>
    </div>
  );
}
