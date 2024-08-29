import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const revalidate = 60;

export async function generateStaticParams() {
  const { data: blogs } = await createClient()
    .from("blogs")
    .select()
    .order("id", { ascending: false });

  if (!blogs) {
    notFound();
  }
  return blogs?.map(({ id }) => ({
    id,
  }));
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: blog } = await createClient()
    .from("blogs")
    .select()
    .match({ id })
    .single();

  if (!blog) {
    notFound();
  }

  return (
    <div className="mx-auto p-2 w-full max-w-screen-md">
      {blog.cover_image ? (
        <div className="w-full bg-cover bg-center bg-no-repeat aspect-video overflow-hidden rounded-md relative border border-2-outline">
          <Image
            src={blog.cover_image}
            alt={blog.name}
            fill
            className="object-cover"
            priority
            sizes="100%"
          />
        </div>
      ) : (
        <div className="w-full bg-cover bg-center bg-no-repeat aspect-video overflow-hidden rounded-md relative border border-2-outline">
          <Image
            src="https://placehold.co/1200x675/png"
            className="object-cover"
            alt={blog.name}
            fill
            sizes="100%"
            priority
          />
        </div>
      )}
      <div className="flex justify-between items-center px-2">
        <p className="text-md md:text-xl">{blog.name}</p>
        <p className="text-md md:text-xl">{blog.author}</p>
      </div>

      <p>{blog.description}</p>
      <div className="prose lg:prose-xl mt-12 dark:prose-invert">
        <Markdown remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </div>
    </div>
  );
}
