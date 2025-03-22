import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { GetStaticPaths, GetStaticProps } from "next";
import { BlogPost } from "@/lib/blog";

type Props = {
  post: BlogPost;
  htmlContent: string;
};

export default function BlogPostPage({ post, htmlContent }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-mono font-semibold mb-2">{post.title}</h1>
      <p className="text-sm font-mono text-gray-500">{post.date}</p>
      <div
        className="mt-6 font-mono text-base leading-relaxed prose prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      if (data.draft) return null;

      return {
        params: { id: filename.replace(/\.md$/, "") },
      };
    })
    .filter((entry): entry is { params: { id: string } } => entry !== null); // 👈 Type-safe filtering

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id as string;
  const filePath = path.join(process.cwd(), "posts", `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    props: {
      post: {
        id: data.id,
        title: data.title,
        date: String(data.date),
        excerpt: data.excerpt,
      },
      htmlContent,
    },
  };
};
