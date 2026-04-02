import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogCategoryNotFound() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-md rounded-lg border p-8 text-center">
        <h1 className="mb-2 text-2xl font-bold">Category not found</h1>
        <p className="mb-6 text-muted-foreground">
          This category doesn&apos;t exist or the path is invalid.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
          <Link href="/blog/category/tech">
            <Button variant="outline">Browse Tech</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
