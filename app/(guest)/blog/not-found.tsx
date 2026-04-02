import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-md rounded-lg border p-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Post not found</h1>
        <p className="mb-6 text-muted-foreground">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link href="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    </div>
  )
}
