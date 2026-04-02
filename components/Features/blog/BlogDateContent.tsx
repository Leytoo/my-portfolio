import Link from "next/link"
import { BlogPost } from "@/constant/blog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import { Section } from "@/components/common/Section"

interface BlogDateContentProps {
  segments: string[]
  filteredPosts: BlogPost[]
  year?: string
  month?: string
}

export function BlogDateContent({
  segments,
  filteredPosts,
  year,
  month,
}: BlogDateContentProps) {
  return (
    <Section className="py-12">
      <Link
        href="/blog"
        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <div className="mb-12 flex flex-col gap-4">
        <div className="flex items-center gap-3 font-medium text-purple-500">
          <Calendar size={24} />
          <h1 className="text-4xl font-bold">
            Archive: {segments.length > 0 ? segments.join(" / ") : "All Dates"}
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Filter blog posts by year, month, or day using optional catch-all
          routes.
        </p>
      </div>

      <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
        {!year && (
          <div className="flex gap-2">
            <Link href="/blog/date/2025">
              <Button variant="outline">Year 2025</Button>
            </Link>
            <Link href="/blog/date/2024">
              <Button variant="outline">Year 2024</Button>
            </Link>
          </div>
        )}
        {year && !month && (
          <div className="flex gap-2">
            <Link href={`/blog/date/${year}/02`}>
              <Button variant="outline">February</Button>
            </Link>
            <Link href={`/blog/date/${year}/01`}>
              <Button variant="outline">January</Button>
            </Link>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex flex-col justify-between rounded-2xl border p-6 transition-all hover:border-primary/50 hover:bg-muted/30 md:flex-row md:items-center">
                <div>
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="line-clamp-1 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 text-right md:mt-0">
                  <span className="rounded-full bg-muted px-3 py-1 font-mono text-sm transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-3xl border-2 border-dashed bg-muted/10 py-20 text-center">
            <p className="text-muted-foreground">
              No posts found for this specific date range.
            </p>
            <Link
              href="/blog/date"
              className="mt-4 block text-sm font-medium text-primary hover:underline"
            >
              Clear filters
            </Link>
          </div>
        )}
      </div>

      <div className="mt-16 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8">
        <h3 className="mb-2 text-lg font-semibold text-purple-700 dark:text-purple-400">
          How this works:
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          This page uses an{" "}
          <code className="rounded bg-muted p-1 font-mono text-purple-500">
            [[...slug]]
          </code>{" "}
          (Optional Catch-all) route. Unlike the standard catch-all, this also
          matches the root path{" "}
          <code className="rounded bg-muted p-1 font-mono">/blog/date</code>.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <p className="mb-1 font-mono text-xs text-muted-foreground">URL:</p>
            <p className="font-mono text-sm break-all text-purple-500">
              /blog/date{segments.length > 0 ? `/${segments.join("/")}` : ""}
            </p>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <p className="mb-1 font-mono text-xs text-muted-foreground">
              Params Object:
            </p>
            <pre className="font-mono text-xs">
              {JSON.stringify({ slug: segments }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </Section>
  )
}
