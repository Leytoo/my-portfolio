import { BLOG_POSTS } from "@/constant/blog"
import { BlogDateContent } from "@/components/Features/blog/BlogDateContent"

interface BlogDatePageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function BlogDatePage({ params }: BlogDatePageProps) {
  const { slug: segments = [] } = await params

  // Parse date parameters: [year] or [year, month] or [year, month, day]
  const year = segments[0]
  const month = segments[1]
  const day = segments[2]

  // Filter posts by date
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const postDate = new Date(post.date)

    if (year && postDate.getFullYear() !== parseInt(year)) return false
    if (month && postDate.getMonth() + 1 !== parseInt(month)) return false
    if (day && postDate.getDate() !== parseInt(day)) return false

    return true
  })

  return (
    <BlogDateContent
      segments={segments}
      filteredPosts={filteredPosts}
      year={year}
      month={month}
    />
  )
}
