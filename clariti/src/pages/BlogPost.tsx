import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Dummy blog data (later you can replace this with CMS/Markdown/DB)
const blogPosts = [
  {
    slug: "future-of-retail-media",
    title: "The Future of Retail Media",
    date: "Aug 20, 2025",
    author: "Rohan Choudhary",
    image:
      "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=1200&q=80",
    content: `
      Retail media is evolving faster than ever. Brands are now leveraging 
      real-time data and AI to create hyper-personalized campaigns. At Clariti, 
      we believe the next wave will be focused on transparency, SKU-level ROAS 
      measurement, and multi-network optimization. 
      
      <br/><br/>
      Over the next 5 years, expect retail media to become the **single most 
      effective channel** for consumer engagement — blending content, commerce, 
      and data into one seamless experience.
    `,
  },
  {
    slug: "data-driven-campaigns",
    title: "Data-Driven Campaigns",
    date: "Aug 15, 2025",
    author: "Clariti Team",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    content: `
      Data-driven campaigns empower marketers to allocate budgets more 
      effectively. Clariti’s unified dashboard ensures brands can see campaign 
      performance across multiple retail networks. 
      
      <br/><br/>
      By focusing on data, businesses can **increase ROAS by 35%** and make 
      smarter decisions at scale.
    `,
  },
];

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-container text-center">
        <h2 className="section-title">Post Not Found</h2>
        <Link to="/blog">
          <Button className="mt-4 bg-pulse-500 hover:bg-pulse-600 rounded-full">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-dark-900">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-pulse-50 to-orange-100 text-center">
        <h1 className="section-title mb-4">{post.title}</h1>
        <p className="text-gray-600">
          {post.date} · {post.author}
        </p>
      </section>

      {/* Blog Content */}
      <section className="section-container max-w-3xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-2xl shadow-elegant mb-8"
        />
        <div
          className="prose prose-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-10">
          <Link to="/blog">
            <Button className="bg-pulse-500 hover:bg-pulse-600 rounded-full">
              ← Back to Blog
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
