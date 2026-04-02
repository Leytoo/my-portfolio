"use client"

import { Section } from "@/components/common/Section"
import Image from "next/image"
import { useState } from "react"

interface ProjectCard {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform built with Next.js and Stripe integration",
    image: "/homepage",
    tags: ["React", "Next.js", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "/homepage",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my best work and projects",
    image: "/homepage",
    tags: ["Next.js", "TypeScript", "CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Social networking platform with messaging and notifications",
    image: "/homepage",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with API integration",
    image: "/homepage",
    tags: ["React", "API", "Chart.js"],
    link: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-friendly fitness tracking application",
    image: "/homepage",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
]

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(value.toLowerCase()) ||
        project.description.toLowerCase().includes(value.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(value.toLowerCase())
        )
    )
    setFilteredProjects(filtered)
  }

  return (
    <Section className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div
        className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 animate-pulse rounded-full bg-gradient-to-br from-red-200 to-orange-200 opacity-30 mix-blend-multiply blur-3xl filter"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 space-y-12">
        {/* Header Section */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-5xl font-bold text-slate-900 lg:text-6xl">
              Projects
            </h2>
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
          </div>

          {/* Search Bar */}
          <div className="flex max-w-md items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full rounded-full border-2 border-slate-300 bg-white px-6 py-3 pl-12 text-slate-700 placeholder-slate-400 transition-colors duration-300 focus:border-red-500 focus:outline-none"
              />
              <span className="absolute top-1/2 left-4 -translate-y-1/2 transform text-xl">
                🔍
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group cursor-pointer"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/50 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-xl">
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-red-500">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-gradient-to-r from-red-100 to-orange-100 px-3 py-1 text-xs font-semibold text-red-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-xl text-slate-600">
              No projects found matching your search.
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}
