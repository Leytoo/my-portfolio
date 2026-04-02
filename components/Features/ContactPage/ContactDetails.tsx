import { Section } from "@/components/common/Section"
import Image from "next/image"

interface ContactInfo {
  label: string
  value: string
  icon: string
  link?: string
}

interface SocialLink {
  name: string
  url: string
  icon: string
}

const contactInfo: ContactInfo[] = [
  {
    label: "Email Address",
    value: "Panimdim217@gmail.com",
    icon: "✉️",
    link: "mailto:Panimdim217@gmail.com",
  },
]

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "💼",
  },
  {
    name: "Github",
    url: "https://github.com",
    icon: "🐙",
  },
]

export function ContactDetails() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      <div
        className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 animate-pulse rounded-full bg-gradient-to-br from-red-200 to-orange-200 opacity-30 mix-blend-multiply blur-3xl filter"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div className="max-w-md space-y-8">
          {/* Header */}
          <div>
            <p className="mt-7 mb-2 text-sm font-semibold tracking-widest text-slate-600 uppercase">
              Contact Details
            </p>
            <h2 className="text-5xl font-bold text-slate-900">
              Let{"'"}s Talk.
            </h2>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <p className="mb-3 text-sm font-semibold tracking-wider text-slate-600 uppercase">
                  {info.label}
                </p>
                <a
                  href={info.link}
                  className="group flex items-center gap-3 text-lg font-bold text-slate-900 transition-colors hover:text-red-500"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <span className="underline group-hover:no-underline">
                    {info.value}
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="h-1 w-32 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>

          {/* Socials */}
          <div>
            <p className="mb-4 text-sm font-semibold tracking-wider text-slate-600 uppercase">
              Socials
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-red-500"
                >
                  <span className="text-2xl transition-transform group-hover:scale-125">
                    {social.icon}
                  </span>
                  <span className="underline group-hover:no-underline">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Lines */}
          <div className="space-y-2 pt-4">
            <div className="h-px bg-slate-300"></div>
            <div className="h-px w-3/4 bg-slate-300"></div>
            <div className="h-px w-1/2 bg-slate-300"></div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-2xl border-8 border-white/80 bg-white shadow-2xl">
            <Image
              src="/homepage"
              alt="About Picture"
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
