import { Section } from "@/components/common/Section"
import Link from "next/link"
export function Contact() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-extrabold">Let&apos;s build something</h1>
        <p className="w-170">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          velit expedita cum nobis voluptatibus nulla est nostrum adipisci amet
          ratione molestias quae necessitatibus saepe, numquam accusantium,
          eaque reiciendis suscipit at.
        </p>
        <Link
          href="/contacts"
          className="cursor:pointer font-bold hover:underline"
        >
          Tap me
        </Link>
      </div>
    </Section>
  )
}
