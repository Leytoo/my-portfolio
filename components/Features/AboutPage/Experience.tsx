import { Section } from "@/components/common/Section"

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  description: string
}

interface TechStack {
  category: string
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Company A",
    period: "2022 - Present",
    description: "Building amazing web experiences with React and Next.js",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Tech Company B",
    period: "2020 - 2022",
    description: "Developed and maintained full stack applications",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Tech Company C",
    period: "2019 - 2020",
    description: "Started my journey in web development",
  },
]

const techStacks: TechStack[] = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "PHP"],
  },
]

export function Experience() {
  return (
    <Section className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-0 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div
        className="absolute right-0 bottom-1/4 h-96 w-96 translate-x-1/3 animate-pulse rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-20 mix-blend-multiply blur-3xl filter"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 space-y-24">
        {/* Experience Section */}
        <div>
          <div className="mb-12 flex items-center gap-3">
            <div className="text-3xl">💼</div>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex gap-8">
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full border-4 border-slate-800 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  {index !== experiences.length - 1 && (
                    <div className="mt-2 h-24 w-1 bg-gradient-to-b from-red-500/50 to-transparent"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className="flex-1 pb-8">
                  <div className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-white/10">
                    <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-red-500">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-slate-400 md:text-right">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-3 font-semibold text-red-500">
                      {exp.company}
                    </p>
                    <p className="leading-relaxed text-slate-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stacks Section */}
        <div>
          <h2 className="mb-2 inline-block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-3xl font-bold text-transparent text-white">
            &lt;Tech Stacks&gt;
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {techStacks.map((stack) => (
              <div key={stack.category} className="group">
                <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-red-500">
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-gradient-to-br hover:from-red-500/10 hover:to-orange-500/10"
                    >
                      <p className="text-center font-semibold text-white">
                        {tech}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
