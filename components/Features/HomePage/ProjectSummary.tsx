import { Section } from "@/components/common/Section"
import Link from "next/link"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/constant/project"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
export function ProjectSummary() {
  return (
    <Section>
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
          My Recent Projects
        </h1>
        <div className="mt-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {Project.slice(0, 3).map((data, index) => (
            <Link
              key={index}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Card className="relative mx-auto h-full w-full pt-0">
                <div className="absolute inset-0 z-30 aspect-video" />
                <Image
                  src={data.image}
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover"
                  width={500}
                  height={500}
                />
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">
                    {data.name}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {data.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 flex w-fit items-center gap-2 text-base text-blue-600 hover:underline sm:text-lg"
        >
          View Archive <ArrowRight />
        </Link>
      </div>
    </Section>
  )
}
