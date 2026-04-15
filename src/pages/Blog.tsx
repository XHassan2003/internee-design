import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Clock, ArrowRight, Rocket, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Career", "Tech", "Freelancing", "Productivity", "Industry"];

const blogPosts = [
  {
    id: 1,
    title: "How to Land Your First Tech Internship in Pakistan",
    excerpt:
      "A comprehensive guide covering everything from building your resume to acing interviews at top Pakistani tech companies.",
    category: "Career",
    author: "Ayesha Khan",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=80&h=80&fit=crop",
    date: "Apr 10, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=800&h=450&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Top 10 Programming Languages to Learn in 2026",
    excerpt:
      "Stay ahead of the curve with the most in-demand programming languages that Pakistani startups and MNCs are hiring for right now.",
    category: "Tech",
    author: "Hassan Raza",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=80&h=80&fit=crop",
    date: "Apr 7, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Freelancing as a Student: What No One Tells You",
    excerpt:
      "From finding your first client on Upwork to managing deadlines alongside university coursework — real stories from Pakistani student freelancers.",
    category: "Freelancing",
    author: "Zara Ahmed",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=80&h=80&fit=crop",
    date: "Apr 3, 2026",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "5 Productivity Hacks Every Intern Should Know",
    excerpt:
      "Make the most of your internship experience with these battle-tested productivity strategies used by top performers.",
    category: "Productivity",
    author: "Bilal Mirza",
    authorAvatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=80&h=80&fit=crop",
    date: "Mar 28, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Pakistan's Tech Industry: Where is it Headed in 2026?",
    excerpt:
      "An in-depth analysis of Pakistan's booming startup ecosystem, key players, and opportunities for fresh graduates.",
    category: "Industry",
    author: "Sara Malik",
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=80&h=80&fit=crop",
    date: "Mar 21, 2026",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Building a GitHub Portfolio That Gets You Hired",
    excerpt:
      "Learn how to structure your repositories, write great READMEs, and showcase your projects to impress recruiters.",
    category: "Career",
    author: "Umar Farooq",
    authorAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=80&h=80&fit=crop",
    date: "Mar 14, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 7,
    title: "Remote Work Culture: Adapting as a Young Professional",
    excerpt:
      "Navigating the nuances of remote internships and jobs — communication, boundaries, and growth in a distributed team.",
    category: "Career",
    author: "Nadia Shah",
    authorAvatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=80&h=80&fit=crop",
    date: "Mar 7, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "How to Negotiate Your Internship Stipend",
    excerpt:
      "Yes, you can negotiate! Here's a step-by-step guide to confidently discussing compensation even as a first-time intern.",
    category: "Career",
    author: "Kamran Ali",
    authorAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=80&h=80&fit=crop",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=800&h=450&fit=crop",
    featured: false,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("newest");

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  const filtered = rest.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sort === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#111827] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, #22c55e 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold bg-green-500/20 text-green-400 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              Internee.pk Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Expert Insights for the{" "}
              <span className="text-green-400">Next Generation</span> of Professionals
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Career advice, industry trends, and practical guides to help Pakistani students
              and young professionals thrive in the modern workforce.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Button
                className="flex-1 gap-2 bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <Rocket className="w-4 h-4" />
                Explore Internships
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 gap-2 border-gray-600 text-white hover:bg-white/10"
              >
                <Users className="w-4 h-4" />
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border bg-background sticky top-16 z-30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="ml-auto text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === "All" && !searchQuery && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.p {...fadeUp} className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">
              Featured Article
            </motion.p>
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="group grid md:grid-cols-2 gap-0 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={featured.authorAvatar}
                    alt={featured.author}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{featured.author}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <Clock className="w-3 h-3" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {sorted.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((post, i) => (
                <motion.article
                  key={post.id}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground leading-snug line-clamp-2 flex-1">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2.5">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div {...fadeUp} className="text-center py-20">
              <p className="text-lg font-semibold text-foreground">No posts found</p>
              <p className="mt-2 text-muted-foreground text-sm">
                Try adjusting your search or category filters.
              </p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div {...fadeUp}>
            <Mail className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Stay in the Loop</h2>
            <p className="mt-3 text-gray-400">
              Subscribe to our newsletter and get exclusive insights, industry trends, and career tips
              delivered straight to your inbox.
            </p>
            <form
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
