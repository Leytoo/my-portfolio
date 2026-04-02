"use client"

import { Section } from "@/components/common/Section"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you! Your message has been sent successfully.")
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(""), 3000)
    }, 1000)
  }

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-0 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div
        className="absolute right-0 bottom-1/4 h-96 w-96 translate-x-1/3 animate-pulse rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-20 mix-blend-multiply blur-3xl filter"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div>
          <h2 className="mb-4 text-5xl font-bold text-white lg:text-6xl">
            Contacts
          </h2>
          <div className="h-1 w-40 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
        </div>

        {/* Form and Image Container */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Form Column */}
          <div className="lg:col-span-1">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-red-500/50"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                Inquiry Form
              </h3>

              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors duration-300 focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors duration-300 focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors duration-300 focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full transform rounded bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <div className="rounded border border-green-500/50 bg-green-500/20 p-4 text-sm text-green-300">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Map Column */}
          <div className="flex justify-center lg:col-span-2">
            <div className="w-full text-center">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl border-8 border-white/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9562353!3d-37.8162099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0800de4c7c0658d!2sGoogle!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-white/70">
                Find Us Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
