import { Banner } from "@/components/Features/HomePage/Banner"
import { ProjectSummary } from "@/components/Features/HomePage/ProjectSummary"
import { Contact } from "@/components/Features/HomePage/ContactSummary"
export default function Home() {
  return (
    <div>
      <Banner />
      <ProjectSummary />
      <Contact />
    </div>
  )
}
