import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    author: string;
  };
  markdownContent?: string;
}

export function BlogPost({ post, markdownContent }: BlogPostProps) {
  // Use markdownContent if available, otherwise fall back to post.content
  const contentToRender = markdownContent || post.content || "";

  return (
    <div className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
        />

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-gray-600 mb-8 not-prose">{post.excerpt}</p>

          {/* Enhanced ReactMarkdown with custom styling */}
          <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {contentToRender}
            </Markdown>
          </div>
        </div>
      </article>
    </div>
  );
}
