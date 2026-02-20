"use client"

import React from 'react'
import Link from 'next/link';
import { Moon,Sun, User, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';
import { useTheme } from "next-themes"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';
      


const Navbar = () => {
    const { setTheme } = useTheme()

  return (
    <nav className="p-4 flex items-center justify-between ">
      {/* LEFT */}
      <SidebarTrigger/>
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">
        <Image        
          src="/savra-typographic-wordmark-logo.webp"
          alt="Savra Logo"
          width={64}
          height={64}
          className="object-contain"
        />
        </Link>
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src="/minimalist-flat-design-profile-picture.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>RR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
              <DropdownMenuItem variant="destructive"><LogOut />Log Out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>

        </DropdownMenu>
      </div>
    </nav>
  );
};
export default Navbar