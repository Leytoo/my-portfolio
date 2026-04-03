"use client"

import { Section } from "@/components/common/Section"
import Image from "next/image"
import { useState } from "react"
import { Project } from "@/constant/project"

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filtered Projects (no need for extra state)
  const filteredProjects = Project.filter(
    (Project) =>
      Project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Project.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 mix-blend-multiply blur-3xl"></div>
      <div
        className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 animate-pulse rounded-full bg-gradient-to-br from-red-200 to-orange-200 opacity-30 mix-blend-multiply blur-3xl"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-5xl font-bold text-slate-900 lg:text-6xl">
              Projects
            </h2>
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
          </div>

          {/* Search */}
          <div className="flex max-w-md items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search Projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border-2 border-slate-300 bg-white px-6 py-3 pl-12 text-slate-700 placeholder-slate-400 transition-colors duration-300 focus:border-red-500 focus:outline-none"
              />
              <span className="absolute top-1/2 left-4 -translate-y-1/2 text-xl">
                🔍
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((Project, index) => (
            <a key={index} href={Project.link} className="group cursor-pointer">
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/50 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-200">
                  <Image
                    src={Project.image}
                    alt={Project.name}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-red-500">
                    {Project.name}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {Project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-xl text-slate-600">
              No Projects found matching your search.
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}
