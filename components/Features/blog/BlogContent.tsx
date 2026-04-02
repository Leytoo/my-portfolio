import Link from "next/link"
import { BlogPost } from "@/constant/blog"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { Section } from "@/components/common/Section"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <Section className="py-12">
      <Link
        href="/blog"
        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <div className="mb-8 space-y-4">
        <div className="flex gap-2">
          {post.category.map((cat) => (
            <Badge key={cat} variant="outline" className="capitalize">
              {cat}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="space-y-4 text-lg leading-relaxed">{post.content}</div>
      </div>

      <div className="mt-16 rounded-2xl border border-dashed bg-muted/50 p-6 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          Route Strategy: <span className="text-primary">[slug]</span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          This matches an exact segment. Variable: slug = &quot;{post.slug}
          &quot;
        </p>
      </div>
    </Section>
  )
}
