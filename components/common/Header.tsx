import { NavList } from "@/constant/page"
import Link from "next/link"

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b-2 p-5 backdrop-blur-lg">
      <div className="flex justify-between">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-extrabold">Panimdim Joselito</h1>
          <p className="text-muted-foreground">Web Developer</p>
        </div>
        <div className="flex">
          <ul className="flex gap-15">
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
      </div>
    </div>
  )
}
