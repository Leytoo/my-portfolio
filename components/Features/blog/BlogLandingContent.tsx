import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/common/Section"
import { BLOG_POSTS } from "@/constant/blog"

export function BlogLandingContent() {
  return (
    <Section className="py-12">
      <div className="mb-12 flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Blog Tutorial
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn how Next.js App Router handles different dynamic routing
          patterns.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-3">
        {/* Dynamic Route 1 */}
        <Card className="border-primary/20 bg-primary/5 transition-all hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2 font-mono text-xs text-primary">
              [slug]
            </div>
            <CardTitle>Dynamic Segment</CardTitle>
            <CardDescription>
              Exact match for single segments. Used for individual blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="mb-4 block rounded bg-muted p-1 font-mono text-sm">
              /blog/getting-started-with-nextjs
            </code>
            <Link
              href="/blog/getting-started-with-nextjs"
              className="text-sm font-medium text-primary hover:underline"
            >
              View Example →
            </Link>
          </CardContent>
        </Card>

        {/* Dynamic Route 2 */}
        <Card className="border-blue-500/20 bg-blue-500/5 transition-all hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 w-fit rounded-lg bg-blue-500/10 p-2 font-mono text-xs text-blue-500">
              [...slug]
            </div>
            <CardTitle>Catch-all Segment</CardTitle>
            <CardDescription>
              Matches one or more segments. Great for nested categories or
              crumbs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="mb-4 block rounded bg-muted p-1 font-mono text-sm">
              /blog/category/tech/nextjs
            </code>
            <Link
              href="/blog/category/tech/nextjs"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              View Example →
            </Link>
          </CardContent>
        </Card>

        {/* Dynamic Route 3 */}
        <Card className="border-purple-500/20 bg-purple-500/5 transition-all hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 w-fit rounded-lg bg-purple-500/10 p-2 font-mono text-xs text-purple-500">
              [[...slug]]
            </div>
            <CardTitle>Optional Catch-all</CardTitle>
            <CardDescription>
              Matches zero or more segments. Perfect for filterable archives or
              dates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="mb-4 block rounded bg-muted p-1 font-mono text-sm">
              /blog/date/2025/02
            </code>
            <Link
              href="/blog/date/2025/02"
              className="text-sm font-medium text-purple-500 hover:underline"
            >
              View Example →
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group rounded-2xl border p-6 transition-all hover:border-primary/50 hover:bg-muted/30">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <span className="text-sm whitespace-nowrap text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <p className="mb-4 line-clamp-2 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.category.map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
