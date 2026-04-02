"use client"

import { NavList } from "@/constant/page"
import Link from "next/link"
import { ModeToggle } from "@/components/common/modeToggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-shrink-0 flex-col">
          <h1 className="text-base font-extrabold sm:text-lg lg:text-xl">
            Panimdim Joselito
          </h1>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Web Developer
          </p>
        </div>

        {/* Desktop Nav - Hidden on mobile, Visible on md+ */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex flex-4 justify-center gap-6 lg:gap-8">
            {NavList.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.path}
                  className="text-sm font-semibold transition-colors hover:text-primary"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-1 justify-end">
            <ModeToggle />
          </div>
        </div>

        {/* Right Section - Hamburger + Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Hamburger - Visible on mobile, Hidden on md+ */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu - Only shows on mobile when isOpen is true */}
      {isOpen && (
        <nav className="fixed top-18 left-0 w-full border-t-2 bg-background md:hidden">
          <ul className="flex flex-col gap-0 p-4">
            {NavList.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-semibold transition-colors hover:bg-muted hover:text-primary"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
