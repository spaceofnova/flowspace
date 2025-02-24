import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ScrollProgressBar from "@/components/ui/ScrollProgress";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { id: string } }) {
  const awaitedParams = await params; // Explicitly await params so Next.js will shut up
  const { id } = awaitedParams;

  const title =
    id === "new" ? "New Blog - Flowspace" : await fetchBlogTitle(id);
  return { title };
}

async function fetchBlogTitle(id: string): Promise<string> {
  const supabase = createClient();
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("name")
    .eq("id", id)
    .single();

  if (error || !blog) return "Blog Not Found";
  return blog.name;
}

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("id")
    .order("id", { ascending: false });

  if (error || !blogs) return [];

  return blogs.map(({ id }) => ({ id }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const awaitedParams = await params; // Explicitly await params so Next.js will shut up
  const { id } = awaitedParams;

  const supabase = createClient();
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div className="relative mx-auto w-full max-w-screen-md">
      <ScrollProgress className="top-[48px]" />
      <span className="page-blogs hidden" />
      <div className="border-2-outline relative aspect-video w-full overflow-hidden rounded-md border bg-cover bg-center bg-no-repeat">
        {blog.cover_image && (
          <Image
            src={blog.cover_image}
            alt={blog.name}
            fill
            className="object-cover"
            priority
            sizes="100%"
          />
        )}
      </div>

      <div className="flex items-center justify-between px-2">
        <p className="text-md md:text-xl">{blog.name}</p>
        <p className="text-md md:text-xl">{blog.author}</p>
      </div>

      <p>{blog.description}</p>
      <div className="prose lg:prose-xl dark:prose-invert mt-12">
        <Markdown remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </div>
    </div>
  );
}
