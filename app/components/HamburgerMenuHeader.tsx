"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { HamburgerMenu } from "solar-icon-set";
import Link from "next/link";

const HamburgerMenuHeader = ({ menuItems }: { menuItems: string[][] }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="overflow-hidden hamberger bg-inherit !backdrop-blur-none !backdrop-saturate-0"
    >
      <NavbarContent className="px-0 bg-transparent">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="bg-transparent px-0"
        />
      </NavbarContent>

      <NavbarMenu className="py-10 text-slate-700 text-sm font-medium">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              // color="foreground"
              href={item[1]}
              // size="lg"
            >
              {item[0]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default HamburgerMenuHeader;