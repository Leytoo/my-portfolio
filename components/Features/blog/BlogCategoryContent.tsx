import Link from "next/link"
import { BlogPost } from "@/constant/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Section } from "@/components/common/Section"

interface BlogCategoryContentProps {
  activeCategories: string[]
  filteredPosts: BlogPost[]
  mainCategory: string
}

export function BlogCategoryContent({
  activeCategories,
  filteredPosts,
  mainCategory,
}: BlogCategoryContentProps) {
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
        <h1 className="text-4xl font-bold capitalize">
          Category: {activeCategories.join(" / ")}
        </h1>
        <p className="text-muted-foreground">
          Showing posts match{" "}
          <span className="font-semibold text-foreground underline decoration-primary decoration-2">
            {mainCategory}
          </span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group h-full transition-all hover:border-primary">
                <CardHeader>
                  <CardTitle className="transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.category.map((cat) => (
                      <Badge
                        key={cat}
                        variant={cat === mainCategory ? "default" : "secondary"}
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full rounded-3xl border-2 border-dashed bg-muted/20 py-12 text-center">
            <p className="text-muted-foreground">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>

      <div className="mt-16 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8">
        <h3 className="mb-2 text-lg font-semibold">How this works:</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          This page uses a{" "}
          <code className="rounded bg-muted p-1 font-mono text-blue-500">
            [...slug]
          </code>{" "}
          (Catch-all) route. It captures all segments after{" "}
          <code className="rounded bg-muted p-1 font-mono">
            /blog/category/
          </code>{" "}
          into an array.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <p className="mb-1 font-mono text-xs text-muted-foreground">URL:</p>
            <p className="font-mono text-sm break-all text-blue-500">
              /blog/category/{activeCategories.join("/")}
            </p>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <p className="mb-1 font-mono text-xs text-muted-foreground">
              Params Object:
            </p>
            <pre className="font-mono text-xs">
              {JSON.stringify({ slug: activeCategories }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </Section>
  )
}
