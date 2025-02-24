import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;

export const metadata = {
  title: "Blogs - Flowspace",
  description: "Browse all the blogs available on Flowspace.",
};

export default async function Posts() {
  const { data: blogs } = await createClient()
    .from("blogs")
    .select("id, name, author, cover_image, pinned")
    .order("pinned", { ascending: true });

  if (!blogs) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col">
      <h1 className="mb-4 text-4xl font-bold">Blogs</h1>
      <div className="flex flex-wrap gap-4">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.id}`}
            className="border-outline relative flex w-full cursor-pointer flex-col gap-2 rounded-md border md:w-48"
            key={blog.id}
          >
            {blog.cover_image ? (
              <div className="relative aspect-video w-full overflow-hidden rounded">
                <Image
                  src={blog.cover_image}
                  alt={blog.name}
                  fill
                  sizes="100%"
                  priority
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden rounded">
                <Image
                  src="https://placehold.co/400x225/png"
                  className="object-cover"
                  alt={blog.name}
                  fill
                  sizes="100%"
                  priority
                />
              </div>
            )}
            <div className="p-1">
              <h1>{blog.name}</h1>
              <p>{blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
