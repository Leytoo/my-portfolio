import { NavList } from "@/constant/page"
import Link from "next/link"
import { ModeToggle } from "@/components/common/modeToggle"
export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b-2 p-5 backdrop-blur-lg">
      <div className="flex items-center justify-between gap-8">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-extrabold">Panimdim Joselito</h1>
          <p className="text-muted-foreground">Web Developer</p>
        </div>
        <div className="flex-1">
          <ul className="flex justify-center gap-15">
            {NavList.map((nav, index) => (
              <li
                key={index}
                className="flex items-center justify-center text-center font-bold"
              >
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
