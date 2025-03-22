import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllBlogPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    };
  });
}

export function getPostContent(id: string): {
  metadata: BlogPost;
  content: string;
} {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    metadata: {
      id: data.id,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    },
    content,
  };
}