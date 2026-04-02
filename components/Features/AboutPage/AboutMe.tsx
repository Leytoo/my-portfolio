import { Section } from "@/components/common/Section"
import Image from "next/image"

export function AboutMe() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div
        className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 animate-pulse rounded-full bg-gradient-to-br from-red-200 to-orange-200 opacity-30 mix-blend-multiply blur-3xl filter"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 mix-blend-multiply blur-3xl filter"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div
        className="bg-grid-pattern absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      {/* Decorative Line */}
      <div className="absolute top-20 right-0 left-0 h-px bg-gradient-to-r from-transparent via-red-300/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-16 px-4 py-12 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <h1 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-[30px] font-bold text-transparent lg:text-5xl">
              Hey, I{"'"}m Leyto
              <span className="ml-3">👋</span>
            </h1>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed font-light text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            exercitationem quaerat eum, sed voluptate repellendus eos
            repudiandae rerum modi distinctio id error nulla impedit, fugit
            dicta numquam ad, labore libero.
          </p>

          {/* Contact Information */}
          <div className="space-y-3 pt-4">
            <p className="text-sm font-semibold tracking-wider text-slate-600 uppercase">
              Contact Me
            </p>
            <div className="space-y-3">
              <a
                href="tel:08124356789"
                className="group flex items-center gap-4 rounded-lg border border-slate-200/50 bg-white/70 p-4 backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-white hover:shadow-lg"
              >
                <span className="text-2xl">📱</span>
                <span className="font-medium text-slate-700 transition-colors group-hover:text-red-500">
                  08124356789
                </span>
              </a>
              <a
                href="mailto:Pasmobiz19@gmail.com"
                className="group flex items-center gap-4 rounded-lg border border-slate-200/50 bg-white/70 p-4 backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-white hover:shadow-lg"
              >
                <span className="text-2xl">✉️</span>
                <span className="font-medium text-slate-700 transition-colors group-hover:text-red-500">
                  Pasmobiz19@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Resume Link */}
          <a
            href="#"
            className="inline-flex transform items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50"
          >
            <span>⬇️</span>
            Download Resume
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="hover:shadow-3xl relative h-80 w-80 overflow-hidden rounded-2xl border-8 border-white/80 bg-white shadow-2xl backdrop-blur-sm transition-shadow duration-300">
            <Image
              src="/homepage"
              alt="About Me Picture"
              width={300}
              height={300}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
