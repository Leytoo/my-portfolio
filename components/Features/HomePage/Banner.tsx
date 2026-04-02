import { Section } from "@/components/common/Section"
import Image from "next/image"
import Link from "next/link"
export function Banner() {
  return (
    <Section>
      <div className="container mx-auto flex flex-col-reverse items-center justify-center gap-5 lg:flex-col-reverse lg:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-5 lg:ml-40">
          <p className="flex items-center gap-2 text-blue-600">
            <span className="flex animate-pulse items-center justify-center text-center text-2xl font-bold text-green-500">
              ·
            </span>
            Available for new project
          </p>
          <h1 className="text-3xl font-extrabold">Hey, I&apos;m Leyto👋</h1>
          <p className="text-lg text-muted-foreground">
            Hi, I’m Joselito. I’m passionate about becoming a web developer,
            with a strong interest in creating clean, user-friendly, and
            functional websites. I enjoy learning new technologies and
            continuously improving my skills to build modern and responsive web
            applications.
          </p>
          <Link
            href="/contact"
            className="mb-4 w-fit text-lg text-blue-600 hover:underline"
          >
            Message me
          </Link>
        </div>
        <div className="mt-5 flex flex-1 items-center justify-center lg:mt-0">
          <Image
            src="/homepage"
            alt="profile"
            width={400}
            height={400}
            className="rounded-lg transition-all hover:rotate-2"
          />
        </div>
      </div>
    </Section>
  )
}
