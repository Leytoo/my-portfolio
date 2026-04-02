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
      <div>
        <h1 className="ml-20 text-3xl font-extrabold">My Recent Projects</h1>
        <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Project.slice(0, 3).map((data, index) => (
            <Link
              key={index}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video" />
                <Image
                  src={data.image}
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover"
                  width={500}
                  height={500}
                />
                <CardHeader>
                  <CardTitle>{data.name}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 ml-20 flex w-fit items-center gap-2 text-lg text-blue-600 hover:underline"
        >
          View Archive <ArrowRight />
        </Link>
      </div>
    </Section>
  )
}
