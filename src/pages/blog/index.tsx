import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

type Props = {
  posts: BlogPost[];
};

export default function Blog({ posts }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-mono font-semibold mb-4">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id}>
            {post.draft ? (
              <div className="opacity-60 pointer-events-none">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm font-mono text-gray-500">{post.date}</p>
                <p className="font-mono mt-1 italic">Work in progress</p>
              </div>
            ) : (
              <Link href={`/blog/${post.id}`} className="group block">
                <h2 className="text-xl font-semibold group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm font-mono text-gray-500">{post.date}</p>
                <p className="font-mono mt-1">{post.excerpt}</p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      date: String(data.date),
      excerpt: data.excerpt,
      draft: data.draft ?? false,
    };
  });

  return { props: { posts } };
};
