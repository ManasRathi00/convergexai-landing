import { notFound } from "next/navigation";
import { blogPosts } from "../../lib/data";
import { BlogPost } from "../../components/BlogPost";
import fs from "fs/promises";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Convergex AI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Read and parse the markdown file
  let markdownContent = "";
  let frontmatter: any = {};
  if (post && post.markdownPath) {
    try {
      const file = await fs.readFile(post.markdownPath, "utf8");
      const { content, data } = matter(file);
      markdownContent = content;
      frontmatter = data;
    } catch (err) {
      notFound();
    }
  }

  // Merge frontmatter with post metadata (frontmatter takes precedence)
  const postData = { ...post, ...frontmatter, content: markdownContent };

  // BlogPost component can render the metadata and use <ReactMarkdown> for content
  return <BlogPost post={postData} markdownContent={markdownContent} />;
}
