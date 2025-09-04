import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../styles/magic-bento.css";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Retail Media",
      excerpt:
        "Retail media is rapidly evolving. Here’s how brands can adapt and thrive in 2025 and beyond.",
      image:
        "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=800&q=80",
      date: "Aug 20, 2025",
      author: "Rohan Choudhary",
      slug: "the-future-of-retail-media",
    },
    {
      title: "Data-Driven Campaigns",
      excerpt:
        "Learn how Clariti helps brands unify campaign data for smarter decision-making and higher ROAS.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      date: "Aug 15, 2025",
      author: "Clariti Team",
      slug: "data-driven-campaigns",
    },
    {
      title: "5 Trends Shaping Retail Ads",
      excerpt:
        "From AI to automation, explore the top five retail advertising trends transforming the industry.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      date: "Jul 30, 2025",
      author: "Clariti Insights",
      slug: "5-trends-shaping-retail-ads",
    },
  ];

  return (
    <div className="bg-white text-dark-900">
      {/* Hero */}
      <section
        className="relative text-center py-20"
        style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Seamless fade-out at bottom */}
        <div
          className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
          }}
        />
        <h1 className="section-title mb-4">Clariti Blog</h1>
        <p className="section-subtitle mx-auto max-w-2xl">
          Insights, trends, and stories from the world of retail media.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="glass-card magic-bento-card flex flex-col overflow-hidden hover-lift transition"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-gray-500">
                  {post.date} · {post.author}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`}>
                  <Button
                    variant="ghost"
                    className="mt-4 self-start text-pulse-500 hover:text-pulse-600"
                  >
                    Read More →
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center py-10 bg-white border-t">
        <p className="text-gray-600 text-sm">
          © 2025 Clariti. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Blog;
